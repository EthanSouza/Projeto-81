import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from "./TabNavigator";
import CreatePost from "./DrawerNavigator";
import Feed from "./Feed"
import Profile from "../Screens/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screanOptions = {({ route }) => ({
                tabBarIcon:  ({focused, color, size}) =>{
                    let iconName;
                    if(route.name === "feed") {
                        iconName = focused
                            ? "book"
                            : "book-outline";
                    } else if (route.name === 'CreatePost') {
                        iconName = focused ? "create" : "create-outline"
                    }
                    return <Ionicons name ={iconName} size={size} color={color} />
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="feed" component={Feed} />
            <Tab.Screen name="CriarPost" component={CreatePost} />
        </Tab.Navigator>
    )
}

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Tela Inicial" component={TabNavigator} />
            <Drawer.Screen name="Perfil" component={Profile} />
        </Drawer.Navigator>
    );
};