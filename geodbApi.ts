import axios from 'axios'

export const geodbApi = axios.create({
  baseURL: 'http://geodb-free-service.wirefreethought.com/v1/geo/'
})

export function getCities(name: string) {
  return geodbApi.get('/cities', {
    params: {
      namePrefix: name,
      languageCode: 'pt_BR',
    }
  })
}