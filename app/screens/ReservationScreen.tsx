import { observer } from "mobx-react-lite"
import React, { FC, useMemo, useCallback } from "react"
import {
  Image,
  ImageStyle,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
  Text,
} from "react-native"
import { Header } from "app/components"
import { goBack, navigate } from "../navigators"
import { useStores } from "app/models"
import { MainStackScreenProps } from "app/navigators/MainNavigator"
import { FlashList } from "@shopify/flash-list"
import { colors } from "app/theme"

interface ReservationScreenProps extends MainStackScreenProps<"ReservationScreen"> {}

export const ReservationScreen: FC<ReservationScreenProps> = observer(function WelcomeScreen() {
  const { authStore } = useStores()

  const DATA = [
    {
      title: "First Item",
    },
    {
      title: "Second Item",
    },
  ]

  return (
    <View style={$container}>
      <Header
        leftIcon="back"
        title="店舗名"
        onLeftPress={() => {
          authStore.logout()
        }}
        titleStyle={{ color: "white" }}
        leftIconColor="white"
        backgroundColor="#2B4090"
      />
      <FlashList
        data={DATA}
        contentContainerStyle={{
          paddingVertical: 20,
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={{
                marginHorizontal: 20,
                backgroundColor: "#EFF2F9",
                marginBottom: 10,
                padding: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomWidth: 1,
                  paddingBottom: 5,
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: "700", textAlign: "center" }}>
                  Uqey Test
                </Text>
                <View
                  style={{ flexDirection: "row", width: "30%", justifyContent: "space-between" }}
                >
                  <TouchableOpacity
                  onPress={()=> {
                    navigate('ChatScreen')
                  }}
                  >
                    <Image
                      source={{ uri: "https://cdn-icons-png.flaticon.com/512/5962/5962463.png" }}
                      style={{
                        width: 30,
                        height: 30,
                      }}
                    />
                  </TouchableOpacity>

                  <Image
                    source={{
                      uri: "https://cdn.icon-icons.com/icons2/2699/PNG/512/line_logo_icon_169249.png",
                    }}
                    style={{
                      width: 30,
                      height: 30,
                    }}
                  />
                  <Image
                    source={{ uri: "https://cdn-icons-png.flaticon.com/512/535/535239.png" }}
                    style={{
                      width: 30,
                      height: 30,
                    }}
                  />
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity>
                  <Image
                    source={{
                      uri: "https://www.bienphong.com.vn/images/media//730/2022/5/29/78992300pm_suc-manh-vuot-troi.jpg",
                    }}
                    style={{
                      width: 100,
                      height: 100,
                    }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>

                <View
                  style={{
                    height: 100,
                    paddingVertical: 20,
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{ fontSize: 16, fontWeight: "700", color: colors.palette.mainColor }}
                  >
                    2024/<Text style={{ fontSize: 20, fontWeight: "700" }}>01/18 17:00</Text>
                  </Text>
                  <Text
                    style={{ fontSize: 16, fontWeight: "700", color: colors.palette.mainColor }}
                  >
                    ~ 2024/01/18 17:30
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )
        }}
        estimatedItemSize={200}
      />
    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
}
