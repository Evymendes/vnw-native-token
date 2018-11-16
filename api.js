import { AsyncStorage } from "react-native"
import axios from "axios"

export default async () => {
  try {
    let token = await AsyncStorage.getItem("token")
    return axios.create({
      baseURL: "mybeautifulip.com",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  } catch (error) {
    throw error
  }
}
