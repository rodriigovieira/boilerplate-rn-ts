import Reactotron from "reactotron-react-native"

const tron = Reactotron.configure()
  .useReactNative()
  .connect()

console.trom = tron.log
