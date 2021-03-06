import React from 'react'
import Icon from   'react-native-vector-icons/FontAwesome'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Auth from './screens/Auth'

const Tab = createBottomTabNavigator();

export default props = () => {
    return (
      <NavigationContainer>
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) =>{
                    let iconName;
                    if(route.name === "Feed"){
                        iconName = "home"
                    }else if(route.name === "AddPhoto"){
                        iconName = "camera"
                    }else{
                        iconName = "user"
                    }
                    return <Icon name={iconName} size={30} color={color} />  
                }
            })}
            initialRouteName = "Feed" 
            tabBarOptions = {{
                showLabel: false
            }}
        >
          <Tab.Screen name="AddPhoto" component={AddPhoto} />
          <Tab.Screen name="Feed" component={Feed} />
          <Tab.Screen name="Auth" component={Auth} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }