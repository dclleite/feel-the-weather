import React, { useContext, createContext, useState } from 'react'
import { getCities } from '../../geodbApi'

type WeatherContextData = {
  setIsSearching: (isSearching: boolean) => void
  isSearching: boolean
  searchCity: (cityName: string) => void
  searchCityName: string
  citiesFound: CityData[]
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
  const [isSearching, setIsSearching] = useState(false)

  async function searchCity(cityName: string) {
    if(cityName) {
      try {
        setSearchCityName(cityName)
        const { data: CitiesResponse } = await getCities(cityName)
        console.log(CitiesResponse)
        setCitiesFound(CitiesResponse)
      } catch (error) {
        console.warn(error)
      } finally {
        setIsSearching(false)
      }
    }
    
  }

  return (
    <WeatherContext.Provider value={{
      setIsSearching,
      isSearching,
      searchCity,
      searchCityName,
      citiesFound
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