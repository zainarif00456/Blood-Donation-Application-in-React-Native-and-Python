import { View, Text } from 'react-native'
import React from 'react'

export default function Index({navigation, route}) {
  return (
    <View>
      <Text>{route.params.username}</Text>
    </View>
  )
}