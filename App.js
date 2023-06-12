import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Starting1 from './components/startingpage';
import Starting2 from './components/startingpage2';
import Starting3 from './components/startingpage3';
import Starting4 from './components/startingpage4';
import MainScreen from './components/mainscreen';
import SettingScreen from './components/settingscreen';
import Appearance from './components/appearance';
import CreateTask from './components/createtask';
import CreateTask2 from './components/createtask2';
import EditTask from './components/edittask';
import OnboardingSlider from './components/OnboardingSlider';
import MainScreen24 from './components/mainscreendup';
import { useFonts,} from 'expo-font';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const Stack = createStackNavigator();

export function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Welcome to HarmonyHub!</Text>
      <Button 
        title="Go to Onboarding" 
        onPress={() => navigation.navigate('OnboardingSlider')}
      />
      <Button 
        title="Go to Starting1" 
        onPress={() => navigation.navigate('Starting1')}
      />
      <Button 
        title="Go to Starting2" 
        onPress={() => navigation.navigate('Starting2')}
      />
      {/* Add more buttons to navigate to other screens */}
      <Button 
        title="Go to Starting3" 
        onPress={() => navigation.navigate('Starting3')}
      />
      <Button 
        title="Go to Starting4" 
        onPress={() => navigation.navigate('Starting4')}
      />
      <Button 
        title="Go to MainScreen" 
        onPress={() => navigation.navigate('MainScreen')}
      />
      <Button 
        title="Go to SettingScreen" 
        onPress={() => navigation.navigate('SettingScreen')}
      />
      <Button 
        title="Go to Appearance" 
        onPress={() => navigation.navigate('Appearance')}
      />
      <Button 
        title="Go to Create Task" 
        onPress={() => navigation.navigate('CreateTask')}
      />
      <Button 
        title="Go to Create Task2" 
        onPress={() => navigation.navigate('CreateTask2')}
      />
      <Button 
        title="Go to Edit Task" 
        onPress={() => navigation.navigate('EditTask')}
      />
      <Button 
        title="Go to MainScreen24" 
        onPress={() => navigation.navigate('MainScreen24')}
      />
      
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    'RedHatDisplay_400Regular': require('./assets/fonts/RedHatDisplay.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Starting1" component={Starting1} />
        <Stack.Screen name="Starting2" component={Starting2} />
        {/* Add more screens to the stack navigator */}
        <Stack.Screen name="Starting3" component={Starting3} />
        <Stack.Screen name="Starting4" component={Starting4} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="Appearance" component={Appearance} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
        <Stack.Screen name="CreateTask" component={CreateTask} />
        <Stack.Screen name="CreateTask2" component={CreateTask2} />
        <Stack.Screen name="EditTask" component={EditTask} />
        <Stack.Screen name="OnboardingSlider" component={OnboardingSlider} />
        <Stack.Screen name="MainScreen24" component={MainScreen24} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "RedHatDisplay400Regular"
  },
});

