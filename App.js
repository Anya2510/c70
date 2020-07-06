import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ReadScreen from './screens/ReadScreen';
import WriteScreen from './screens/WriteScreen';

export default class App extends React.Component{
  render(){
  return (
  <AppContainer/>
  )
  }
}

const TabNavigator = createBottomTabNavigator({
  Read:{screen:ReadScreen},
  Write:{screen:WriteScreen}
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({})=>{
      const routeName=navigation.state.routeName
      if (routeName==='Read'){
        return(
          <Image 
          source={require('./assets/read.png')}
          style={{width:50,height:50}}
          />
        )
      }
      else if(routeName==='Write'){
        return(
          <Image
          source={require('./assets/write.png')}
          style={{width:50,height:50}}
          />
        )    
      } 
    }
  })
}
)

const AppContainer = createAppContainer(TabNavigator)