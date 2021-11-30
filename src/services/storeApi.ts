import AsyncStorage from '@react-native-async-storage/async-storage'

const setStoreData = async <T>(storeKey: string, value: T) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(storeKey, jsonValue)
  } catch (e) {
    console.warn(e)
  }
}

const getStoreData = async <T>(storeKey: string): Promise<T | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(storeKey)
    const value: T =  jsonValue != null ? JSON.parse(jsonValue) : null
    return value
  } catch(e) {
    console.warn(e)
    return null
  }
}

export {
  setStoreData,
  getStoreData,
}