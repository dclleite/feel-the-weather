import AsyncStorage from '@react-native-async-storage/async-storage'

const setStoreData = async <T>(storeKey: string, value: T) => {
  console.log(storeKey, value)
  try {
    const jsonValue = JSON.stringify(value)
    console.log(jsonValue)
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