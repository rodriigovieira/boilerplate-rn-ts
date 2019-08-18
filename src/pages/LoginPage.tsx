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

interface PropObject {
  navigation: NavigationObject
}

const LoginPage = (props: PropObject) => {
  return (
    <View style={styles.pageContainer}>
      <Text>O login será aqui.</Text>

      <TouchableOpacity onPress={() => props.navigation.navigate("StartPage")}>
        <Text>Clique aqui para ir à página inicial.</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginPage
