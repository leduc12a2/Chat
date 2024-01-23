import { observer } from "mobx-react-lite"
import React, { FC, useMemo, useCallback, useState, useEffect, useRef } from "react"
import {
  Image,
  ImageStyle,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
  Text,
  Keyboard,
  ScrollView,
} from "react-native"
import { Header } from "app/components"
import { goBack } from "../navigators"
import { useStores } from "app/models"
import { MainStackScreenProps } from "app/navigators/MainNavigator"
import { colors } from "app/theme"
import { Composer, GiftedChat, IMessage, InputToolbar } from "react-native-gifted-chat"
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context"

interface ChatScreenProps extends MainStackScreenProps<"ChatScreen"> {}

export const ChatScreen: FC<ChatScreenProps> = observer(function WelcomeScreen() {
  const { authStore } = useStores()
  const insets = useSafeAreaInsets()

  const [messages, setMessages] = useState<IMessage[]>([])
  const [isShowkeyBoard, setIsShowKeyBoard] = useState<boolean>(false)

  const inputRef = useRef()


  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ])

    const onKeyBoardShow = Keyboard.addListener('keyboardDidShow', ()=> {
      setIsShowKeyBoard(true)
    })
    const onKeyBoardHide = Keyboard.addListener('keyboardDidHide', ()=> {
      setIsShowKeyBoard(false)
    })

    return ()=> {
      onKeyBoardShow.remove()
      onKeyBoardHide.remove()
    }
  }, [])

  const onSend = useCallback((messages: IMessage[] = []) => {
    setMessages((previousMessages: any) => GiftedChat.append(previousMessages, messages))
  }, [])
  
  return (
    <View style={[$container, {marginBottom: insets.bottom}]}>
      
    <GiftedChat
      messages={messages}
      bottomPadding={insets.bottom}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      textInputProps={{autoFocus: true}}
      renderChatFooter={()=> {
        return (
          <View 
          style={{
            marginHorizontal: 5,
            height: 40,
          }}>
            <ScrollView
            style={{flex: 1}}
            horizontal
            keyboardShouldPersistTaps="always"
            showsHorizontalScrollIndicator={false}
            >
            {
              new Array(10).fill('').map((_, index)=> {
                return (
                 <TouchableOpacity 
                 key={index}
                 style={{marginRight: 10, paddingVertical: 5, paddingHorizontal: 10, borderRadius: 20, borderWidth: 1,height:30, marginVertical: 5}}
                 >
                   <Text style={{color: "black"}}>
                    Suggest Message
                  </Text>
                 </TouchableOpacity>
                )
              })
            }
            </ScrollView>
            
          </View>
        )
      }}
    />
    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
}
const content =  { backgroundColor: '#ffffff', flex: 1 }