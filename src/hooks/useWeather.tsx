import React, { useContext, createContext, useState, useEffect, forwardRef } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { getCities } from '../services/geodbApi'
import { getWeatherOneCall, WeatherOneCallResponse } from '../services/openWeatherApi'
import { getStoreData, setStoreData } from '../services/storeApi'
import { STORE_KEYS } from '../tokens'

type WeatherContextData = {
  isTypingCityName: boolean,
  setIsTypingCityName: (isTypingCityName: boolean) => void
  isSearching: boolean
  setIsSearching: (isSearching: boolean) => void
  searchCity: (cityName: string, callback?: () => void) => void
  searchCityName: string
  citiesFound: CityData[]
  currentCityList: CityData[]
  addCity: (city: CityData) => void
  citiesWeatherForecast: WeatherForecast[],
  isLoadStorageData: boolean
}

type WeatherProviderProps = {
  children: React.ReactNode
}

export type CityData = {
  city: string,
  country: string,
  countryCode: string,
  id: number,
  latitude: number,
  longitude: number,
  name: string,
  region: string,
  regionCode: string,
}

export type WeatherForecast = {
  city: CityData
  weatherForecast: WeatherOneCallResponse
}

export const WeatherContext = createContext({} as WeatherContextData)

function WeatherProvider({ children }: WeatherProviderProps) {
  const [searchCityName, setSearchCityName] = useState('')
  const [citiesFound, setCitiesFound] = useState<CityData[]>([])
  const [currentCityList, setCurrentCityList] = useState<CityData[]>([])
  const [citiesWeatherForecast, setCitiesWeatherForecast] = useState<WeatherForecast[]>([])

  const [isTypingCityName, setIsTypingCityName] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [isLoadStorageData, setIsLoadStorageData] = useState(false)

  async function searchCity(cityName: string, callback?: () => void) {
    if(cityName) {
      try {
        setIsSearching(true)
        setSearchCityName(cityName)
        const {data: response} = await getCities(cityName)
        setIsTypingCityName(false)
        setCitiesFound(response.data)
        callback && callback()
      } catch (error) {
        console.warn(error)
      } finally {
        setIsSearching(false)
      }
    }
  }

  async function getWeatherForecast(city: CityData) {
    try {
      const { data: weatherResponse } = await getWeatherOneCall({
        lat: city.latitude, 
        lon: city.longitude, 
        units: 'metric', 
        exclude: ['hourly', 'minutely'],
        lang: 'pt_br'
      })

      const weatherForecast: WeatherForecast = {
        city: {...city},
        weatherForecast: weatherResponse
      }

      return weatherForecast
    } catch (error) {
      console.warn(error)
    }
  }

  async function addCity(city: CityData) {
    if(!currentCityList.some(currentCity => currentCity.id == city.id)) {

      const weatherForecast = await getWeatherForecast(city)

      if(weatherForecast) {
        setCitiesWeatherForecast([
          ...citiesWeatherForecast, 
          weatherForecast
        ])

        const newCurrentCityList = [
          ...currentCityList,
          city,
        ]

        setCurrentCityList(newCurrentCityList)
        setStoreData(STORE_KEYS.CHOSEN_CITIES, newCurrentCityList)
      }
    }
  }

  useEffect(() => {
    async function loadStorageData() {
      try {
        setIsLoadStorageData(true)
        const currentCitiesListStorage = await getStoreData<CityData[]>(STORE_KEYS.CHOSEN_CITIES)

        if(currentCitiesListStorage?.length) {

          for await (const cityStorage of currentCitiesListStorage) {
            if(!citiesWeatherForecast.some(weatherForecast => weatherForecast.city.id === cityStorage.id)) {
              const weatherForecast = await getWeatherForecast(cityStorage)
              if(weatherForecast) {
                setCitiesWeatherForecast((prevState) => [
                  ...prevState, 
                  weatherForecast
                ])
              }
            }
          }
          
          setCurrentCityList(currentCitiesListStorage)
        }
      } catch (error) {
        console.warn(error)
      } finally {
        setIsLoadStorageData(false)
      }
    }

    loadStorageData()
  }, [])

  return (
    <WeatherContext.Provider value={{
      isTypingCityName,
      setIsTypingCityName,
      setIsSearching,
      isSearching,
      searchCity,
      searchCityName,
      citiesFound,
      currentCityList,
      addCity,
      citiesWeatherForecast,
      isLoadStorageData,
    }}>
      {children}
    </WeatherContext.Provider>
  )
}

function useWeather() {
  const context = useContext(WeatherContext)

  return context
}

export {
  WeatherProvider,
  useWeather,
}