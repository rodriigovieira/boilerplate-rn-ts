import React from "react"

import Routes from "~/routes"

if (__DEV__) {
  import("./config/ReactotronConfig")
}

const App = () => {
  return <Routes />
}

export default App
