// React Native
import {
  Text,
  View
} from 'react-native';
// Store
import {
  useCounterStore,
  useProfileStore
} from '../../store';
// Theme
import { styles } from '../../../config';


export const HomeScreen = () => {
  const name = useProfileStore( state => state.name );
  const email = useProfileStore( state => state.email );
  const count = useCounterStore( state => state.count )

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>{ name }</Text>
      <Text style={ styles.title }>{ email }</Text>

      <Text style={ styles.title }>Count: { count }</Text>
    </View>
  );
}
