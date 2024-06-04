// React Native
import {
  Text,
  View
} from 'react-native';
// React Navigation
import { NavigationContainer } from '@react-navigation/native';
// Routes
import { BottomTabNavigator } from './presentation/router';


export const Main = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
