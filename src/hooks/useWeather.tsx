import React, { useContext, createContext, useState } from 'react'
import { getCities } from '../services/geodbApi'

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
}

type WeatherProviderProps = {
  children: React.ReactNode
}

type CityData = {
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

export const WeatherContext = createContext({} as WeatherContextData)

function WeatherProvider({ children }: WeatherProviderProps) {
  const [searchCityName, setSearchCityName] = useState('')
  const [citiesFound, setCitiesFound] = useState<CityData[]>([])
  const [currentCityList, setCurrentCityList] = useState<CityData[]>([])

  const [isTypingCityName, setIsTypingCityName] = useState(false)
  const [isSearching, setIsSearching] = useState(false)

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

  function addCity(city: CityData) {
    setCurrentCityList([
      ...currentCityList,
      city,
    ])
  }

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