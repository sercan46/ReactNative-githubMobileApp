import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeView from './src/views/home-view';
import ProfileView from './src/views/profile-view';
import FollowersView from './src/views/followers-view';
import FollowingViews from './src/views/following-view';
import ReposViews from './src/views/repos-view';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeView}  options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: 'crimson',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center'
        }} />
        <Stack.Screen name="UserProfile" component={ProfileView} options={{
          title: 'Profile',
          headerStyle: {
            backgroundColor: 'crimson',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center'
        }}/>
        <Stack.Screen name="Followers" component={FollowersView} options={{
          title: 'Followers',
          headerStyle: {
            backgroundColor: 'crimson',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center'
        }} />
        <Stack.Screen name="Following" component={FollowingViews}  options={{
          title: 'Following',
          headerStyle: {
            backgroundColor: 'crimson',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center'
        }}/>
        <Stack.Screen name="Repos" component={ReposViews} options={{
          title: 'Repos',
          headerStyle: {
            backgroundColor: 'crimson',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;