// React Native
import {
  Text,
  View
} from 'react-native';
// Store
import { useProfileStore } from '../../store';
// Theme
import { styles } from '../../../config';


export const HomeScreen = () => {
  const name = useProfileStore( state => state.name );
  const email = useProfileStore( state => state.email );

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>{ name }</Text>
      <Text style={ styles.title }>{ email }</Text>
    </View>
  );
}
