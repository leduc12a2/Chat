
  import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"
  import { observer } from "mobx-react-lite"
  import React from "react"
  import * as Screens from "app/screens"
  import { colors } from "app/theme"
import { SafeAreaView } from "react-native-safe-area-context"
  export type MainStackParamList = {
    ReservationScreen: undefined,
    ChatScreen: undefined
  }
  
  /**
   * This is a list of all the route names that will exit the app if the back button
   * is pressed while in that screen. Only affects Android.
   */  
  export type MainStackScreenProps<T extends keyof MainStackParamList> = NativeStackScreenProps<
  MainStackParamList,
    T
  >
  
  // Documentation: https://reactnavigation.org/docs/stack-navigator/
  const Stack = createNativeStackNavigator<MainStackParamList>()
  
export const MainStack = observer(function AppStack() {
    return (
      <Stack.Navigator
        screenOptions={{ headerShown: false, navigationBarColor: colors.background }}
      >
            <Stack.Screen name="ReservationScreen" component={Screens.ReservationScreen} />
            <Stack.Screen name="ChatScreen" component={Screens.ChatScreen} />
      </Stack.Navigator>
    )
  })