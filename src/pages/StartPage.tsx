import React from "react"

import {
  View, Text, StyleSheet, TouchableOpacity
} from "react-native"

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

interface NavigationObject {
  navigate: (pageName: string) => void
}

interface PropObjects {
  navigation: NavigationObject
}

const StartPage = (props: PropObjects) => {
  return (
    <View style={styles.pageContainer}>
      <Text>Bem-vindo!</Text>

      <TouchableOpacity onPress={() => props.navigation.navigate("LoginPage")}>
        <Text>Efetuar Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate("SignUpPage")}>
        <Text>Cadastrar-se</Text>
      </TouchableOpacity>
    </View>
  )
}

export default StartPage
