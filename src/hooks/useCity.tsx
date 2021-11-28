import React, { useContext } from 'react'
import { createContext, useState } from 'react'
import { getCities } from '../../geodbApi'

type CityContextData = {

}

type CityProviderProps = {
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

export const CityContext = createContext({} as CityContextData)

function CityProvider({ children }: CityProviderProps) {
  const [searchCityName, setSearchCityName] = useState('')
  const [citiesFound, setCitiesFound] = useState<CityData[]>([])

  async function searchCity(cityName: string) {
    setSearchCityName(cityName)

    const { data: CitiesResponse } = await getCities(cityName)
    setCitiesFound(CitiesResponse)
  }

  return (
    <CityContext.Provider value={{
      searchCity,
      searchCityName,
      citiesFound
    }}>
      {children}
    </CityContext.Provider>
  )
}

function useCity() {
  const context = useContext(CityContext)

  return context
}

export {
  CityProvider,
  useCity,
}