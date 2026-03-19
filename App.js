import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'styled-components/native';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Import Screens
import Dashboard from './screens/Dashboard';
import TankDetails from './screens/TankDetails';
import Charts from './screens/Charts';
import Settings from './screens/Settings';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Create a stack navigator
const Stack = createStackNavigator();

// Define a theme
const theme = {
  colors: {
    primary: '#6200ee',
    background: '#ffffff',
    surface: '#ffffff',
    error: '#b00020',
    text: '#000000',
    onPrimary: '#ffffff',
    onSecondary: '#000000',
    // Add more theme colors as needed
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Dashboard">
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="TankDetails" component={TankDetails} />
          <Stack.Screen name="Charts" component={Charts} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;