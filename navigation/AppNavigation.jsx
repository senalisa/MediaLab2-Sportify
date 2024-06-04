import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator, TransitionSpecs, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import useAuth from '../hooks/useAuth'

//Views
import Home from '../screens/Home.jsx';
import Leaderboard from '../screens/Leaderboard.jsx';
import Profile from '../screens/Profile.jsx';
import Login from '../screens/Login.jsx';
import Welcome from '../screens/Welcome.jsx';
import Register from '../screens/Register.jsx';
import Onboarding from '../screens/Onboarding.jsx';
import LevelDetail from '../screens/LevelDetail.jsx';
import LevelOneDetail from '../components/Levels/LevelOneDetail.jsx';
import LevelTwoDetail from '../components/Levels/LevelTwoDetail.jsx';
import Trend from '../screens/Trend.jsx';
import WarmingUpStart from '../components/WarmingUp/WarmingUpStart.jsx';
import WarmingUpOne from '../components/WarmingUp/WarmingUpOne.jsx';
import MotivationBetween from '../components/Motivation/MotivationBetween.jsx';
import ActivateStart from '../components/Activate/ActivateStart.jsx'
import ActivateReps from '../components/Activate/ActivateReps.jsx'

// Animation
const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="HomeScreen" component={Home} options={{ headerShown: false }}/>
        </HomeStack.Navigator>
    );
}

// NAVBAR
const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
                position: 'absolute',
                backgroundColor: 'white',
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 10,
                },
                shadowOpacity: 0.25,
                paddingRight: 20,
                paddingLeft: 20,
            }
            }}>
            <Tab.Screen name="Home" component={HomeStackScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                        <Image
                        source={require('./../assets/icons/House.png')}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: focused ? '#122D71' : 'grey'
                        }}
                        />
                    </View>
                ),
            }}/>
            <Tab.Screen name="Leaderboard" component={Leaderboard} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                        <Image
                        source={require('./../assets/icons/Trophy.png')}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: focused ? '#122D71' : 'grey'
                        }}
                        />
                    </View>
                ),
            }}/>
            <Tab.Screen name="Trend" component={Trend} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                        <Image
                        source={require('./../assets/icons/TrendUp.png')}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: focused ? '#122D71' : 'grey'
                        }}
                        />
                    </View>
                ),
            }}/>
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                        <Image
                        source={require('./../assets/icons/UserCircle.png')}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: focused ? '#122D71' : 'grey'
                        }}
                        />
                    </View>
                ),
            }}/>
        </Tab.Navigator>
    );
};

const AppNavigation = () => {
    const { user } = useAuth();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {user ? (
                <>
                    <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
                    <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />

                    <Stack.Screen name="LevelOneDetail" component={LevelOneDetail} options={{ headerShown: false }} />
                    <Stack.Screen name="LevelTwoDetail" component={LevelTwoDetail} options={{ headerShown: false }} />

                    <Stack.Screen name="WarmingUpStart" component={WarmingUpStart} options={{ headerShown: false }} />
                    <Stack.Screen name="WarmingUpOne" component={WarmingUpOne} options={{ headerShown: false }} />

                    <Stack.Screen name="ActivateStart" component={ActivateStart} options={{ headerShown: false }} />
                    <Stack.Screen name="ActivateReps" component={ActivateReps} options={{ headerShown: false }} />

                    <Stack.Screen name="MotivationBetween" component={MotivationBetween} options={{ headerShown: false }} />
                </>
                ) : (
                <>
                    <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
                    <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
                    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                    <Stack.Screen name="LevelDetail" component={LevelDetail} options={{ headerShown: false }} />
                </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
