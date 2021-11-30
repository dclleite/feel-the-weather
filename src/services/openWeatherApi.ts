import axios from 'axios'

const appid = '5693a1ece99daf94dc497e7f390621a2'

type ExcludeOptions = 'current' | 'minutely' | 'hourly' | 'daily' | 'alerts'

type GetWeatherOneCallParams = {
  lat: number
  lon: number
  exclude?: ExcludeOptions[]
  units?: 'standard' | 'metric' | 'imperial' 
  lang?: 'pt_br' | 'en'
}

export type CurrentWeatherResponse = {
  dt: number
  temp: number
  feels_like: number
  humidity: number
  wind_speed: number
  weather: WeatherResponse[]
}

export type WeatherResponse = {
  description: string
}

export type TempResponse = {
  day: number
  min: number
  max: number
}

export type DailyResponse = {
  dt: number
  temp: TempResponse
  weather: WeatherResponse[]
}

export type WeatherOneCallResponse = {
  current: CurrentWeatherResponse
  daily: DailyResponse[]
}

export const openWeatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/'
})

export function getWeatherOneCall(params: GetWeatherOneCallParams) {
  return openWeatherApi.get<WeatherOneCallResponse>('/onecall', { 
    params: {
      ...params,
      exclude: params.exclude?.join(),
      appid
    }
  })
}

