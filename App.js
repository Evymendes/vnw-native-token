import React from "react"
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  Button,
  Alert
} from "react-native"
import Axios from "axios"
import api from "./api"

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: false
    }
  }

  async componentDidMount() {
    await this.checkLogin()
  }

  checkLogin = async () => {
    let token = await AsyncStorage.getItem("token")
    // Alert.alert(`Token: ${token}`)
    this.setState({
      loggedIn: token
    })
  }

  chamandoApi = async () => {
    let instance = await api()

    let result = await instace.get("/umaUrlQualquer")
  }

  logar = async () => {
    let result = await Axios.post("minha-api-de-login.com", {
      data: {
        user: "usuarioLegalzao",
        password: "senhaTop"
      }
    })
    await AsyncStorage.setItem("token", result.data.data.token)
    await this.checkLogin()
  }

  deslogar = async () => {
    await AsyncStorage.removeItem("token")
    await this.checkLogin()
  }

  render() {
    let { loggedIn } = this.state
    return (
      <View style={styles.container}>
        <Text>{loggedIn ? "Logado" : "Deslogado"}</Text>
        <Button title="Logar" onPress={this.logar} />
        <Text>{"\n"}</Text>
        <Button title="Deslogar" onPress={this.deslogar} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})
