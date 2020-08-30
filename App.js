import React from 'react'
import { StatusBar } from 'react-native'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator } from './src/navigation'
import { StoreProvider } from './src/contexts/StoreContexts'
import { getRandomInt } from './src/utils'

const App: () => React$Node = () => {
  const context = {
    user: { id: getRandomInt(1, 3) },
    loans: []
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <StoreProvider context={context}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </StoreProvider>
    </>
  );
};

export default App
