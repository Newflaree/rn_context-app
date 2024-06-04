// React Native
import {
  Pressable,
  Text,
  View
} from 'react-native';
// Store
import { useProfileStore } from '../../store';
// Theme
import { styles } from '../../../config';

export const ProfileScreen = () => {
  const name = useProfileStore( state => state.name );
  const email = useProfileStore( state => state.email );
  const changeProfile = useProfileStore( state => state.changeProfile );

  return (
    <View style={ styles.container } >
      <Text style={ styles.title }>{ name }</Text>
      <Text style={ styles.title }>{ email }</Text>

      <Pressable
        style={ styles.primaryButton }
        onPress={ () => useProfileStore.setState({ name: 'Camilo López' }) }
      >
        <Text>Cambiar Nombre</Text>
      </Pressable>

      <Pressable
        style={ styles.primaryButton }
        onPress={ () => useProfileStore.setState({ email: 'c.lopez@google.com' }) }
      >
        <Text>Cambiar Email</Text>
      </Pressable>

      <Pressable
        style={ styles.primaryButton }
        onPress={ () => changeProfile( 'John Doe', 'j.doe@google.com' ) }
      >
        <Text>Regresar a John</Text>
      </Pressable>
    </View>
  );
}
