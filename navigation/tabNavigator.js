import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-navtive-vector-icons/Ionicons';
import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost';

const Tab = createMaterialBottomTabNavigator ();

const BottomNavigator =()=>{
    return(
        <tabNavigator 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Feed') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'CreatePost') {
                iconName = focused ? 'add-circle' : 'add-circle-outline';
              }
              return (
                <Ionicons
                  name={iconName}
                  size={size}
                  color={color}
                  style={styles.icon}
                />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inacitiveTintColor: 'grey',
          }}>
          <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="CreatePost" component={CreatePost} />
        </tabNavigator>
    )
}

export default BottomNavigator