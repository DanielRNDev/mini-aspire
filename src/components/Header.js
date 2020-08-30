import React from 'react'
import { Header } from 'react-native-elements'

const CustomHeader = ({ title, rightComponent }) => (
  <Header
    barStyle="light-content"
    centerComponent={{ text: title.toUpperCase(), style: { color: '#fff', fontWeight: 'bold', fontSize: 18, letterSpacing: 5 } }}
    containerStyle={{
      backgroundColor: '#e4901a',
      justifyContent: 'space-around',
    }}
    rightComponent={rightComponent}
  />
)

export default CustomHeader
