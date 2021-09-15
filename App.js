import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultShownScreen from './src/screens/ResultShownScreen';

const stack = createStackNavigator()

const App = ()=>{
  return(
    <NavigationContainer>
      <stack.Navigator initialRouteName = "Search">
        <stack.Screen
          name = "Search"
          component = {SearchScreen}
          options = {{
            title: "Business Search",
            headerStyle:{
              backgroundColor: 'green'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center'
          }}
        />

        <stack.Screen
          name = "ResultShow"
          component = {ResultShownScreen}
          options = {{
            title: "ResultShow",
            headerStyle:{
              backgroundColor: 'green'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center'
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App;