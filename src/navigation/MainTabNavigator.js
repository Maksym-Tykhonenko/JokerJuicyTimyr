import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import GameScreen from '../screens/StartGameScreen';
import FruitCollection from '../screens/FruitCollection';
import FruindFactsScreen from '../screens/FruindFactsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const getTabIcon = (routeName) => {
    switch (routeName) {
        case 'Home':
            return require('../assets/img/Blackberry.png');
        case 'GameScreen':
            return require('../assets/img/Game.png');
        case 'FruitCollection':
            return require('../assets/img/Collection.png');
        case 'FruindFactsScreen':
            return require('../assets/img/Fact.png');
        case 'SettingsScreen':
            return require('../assets/img/Settings.png');
    }
};

const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerStyle: { backgroundColor: '#1F2021', shadowColor: '#1F2021' },
                headerTitleStyle: {
                    color: 'white',
                    fontFamily:'Quantico-BoldItalic',
                    fontSize: 40,
                },
                // headerShadowVisible: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 40,
                    left: 20,
                    right: 20,
                    elevation: 5,
                    width: '80%',
                    marginLeft: '10%',
                    backgroundColor: '#0000C3',
                    borderRadius: 30,
                    paddingTop: 15,
                    height: 70,
                    paddingBottom: 10,
                    shadowColor: '#000',
                    shadowOpacity: 0.1,
                    shadowOffset: { width: 0, height: 4 },
                    shadowRadius: 10,
                },
                headerShown: false,
                tabBarIcon: () => (
                    <Image
                        source={getTabIcon(route.name)}
                        style={{ }}
                    />
                ),
            })}
        >

            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: '',
                    headerTitle: 'Home',
                }}
            />

            <Tab.Screen
                name="FruitCollection"
                component={FruitCollection}
                options={{
                    tabBarLabel: '',
                    headerTitle: 'Home',
                }}
            />

            <Tab.Screen
                name="GameScreen"
                component={GameScreen}
                options={{
                    tabBarLabel: '',
                    headerTitle: 'Home',
                }}
            />

            <Tab.Screen
                name="FruindFactsScreen"
                component={FruindFactsScreen}
                options={{
                    tabBarLabel: '',
                    headerTitle: 'Home',
                }}
            />

            <Tab.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={{
                    tabBarLabel: '',
                    headerTitle: 'Home',
                }}
            />


        </Tab.Navigator>
    );
};

export default MainTabNavigator;
