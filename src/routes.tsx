import { createSwitchNavigator, createAppContainer } from "react-navigation"

import StartPage from "~/pages/StartPage"
import LoginPage from "~/pages/LoginPage"
import SignUpPage from "~/pages/SignUpPage"

const Routes = createAppContainer(
  createSwitchNavigator({ StartPage, LoginPage, SignUpPage })
)

export default Routes
