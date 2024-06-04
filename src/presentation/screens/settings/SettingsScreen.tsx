// React
import { useEffect } from 'react';
// React Native
import {
  Pressable,
  Text,
  View
} from 'react-native';
// React Navigation
import { useNavigation } from '@react-navigation/native';
// Store
import { useCounterStore } from '../../store';
// Theme
import { styles } from '../../../config';



export const SettingsScreen = () => {
  const navigation = useNavigation();

  const count = useCounterStore( state => state.count )
  const incrementBy = useCounterStore( state => state.incrementBy )

  useEffect( () => {
    navigation.setOptions({
      title: `Contador: ${ count }`
    });
  }, [ count ] );

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Count: { count }</Text>

      <Pressable
        style={ styles.primaryButton }
        onPress={ () => incrementBy( 1 ) }
      >
        <Text>+1</Text>
      </Pressable>

      <Pressable
        style={ styles.primaryButton }
        onPress={ () => incrementBy( -1 ) }
      >
        <Text>-1</Text>
      </Pressable>
    </View>
  );
}
