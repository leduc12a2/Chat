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
} from "react-native"
import { Text } from "app/components"
import { AppStackScreenProps, navigate } from "../navigators"
import { useStores } from "app/models"
import * as yup from "yup"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigation } from "@react-navigation/native"
import { colors } from "app/theme"

interface WelcomeScreenProps extends AppStackScreenProps<"LoginScreen"> {}

type FormData = {
  email: string
  password: string
}
export const LoginScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen() {
  const { authStore } = useStores()

  const schema = useMemo(
    () =>
      yup.object({
        email: yup.string().email(`Email Wrong Format`).required(`Empty Email`),
        password: yup.string().required(``),
      }),
    [],
  )

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
  const onSubmit = (data: FormData) => {
    console.log(data)
    authStore.login(data)
  }

  return (
    <View style={$container}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="例：uqeymirai@uqey.com"
            style={{
              width: "80%",
              backgroundColor: "gray",
              padding: 20,
              color: "white",
              fontSize: 16,
            }}
            placeholderTextColor={"white"}
            onChangeText={onChange}
          />
        )}
        name="email"
      />
      {errors.email && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="パスワード"
            style={{
              width: "80%",
              backgroundColor: "gray",
              padding: 20,
              color: "white",
              fontSize: 16,
              marginTop: 20,
            }}
            placeholderTextColor={"white"}
            onChangeText={onChange}
          />
        )}
        name="password"
      />
      {errors.password && <Text>This is required.</Text>}

      <TouchableOpacity
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 20,
          alignItems: "center",
          marginTop: 20,
          width: "50%",
          backgroundColor: colors.palette.mainColor
        }}
        onPress={
          handleSubmit(onSubmit)
        }
      >
        <Text style={{color:"white"}}>Login</Text>
      </TouchableOpacity>
    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
}
