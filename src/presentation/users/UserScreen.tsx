import { useState } from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { createUser } from '../../application/createUser';

export default function UserScreen() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  async function handleSave() {
    try {
      await createUser({
        name,
        email,
      });

      Alert.alert('Success', 'User saved');

      setName('');
      setEmail('');

    } catch (error) {
      Alert.alert('Error', 'Complete all fields');
    }
  }


  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Register User
      </Text>


      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />


      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />


      <Button
        title="Save User"
        onPress={handleSave}
      />

    </View>
  );
}


const styles = StyleSheet.create({

  container:{
    padding:20
  },

  title:{
    fontSize:22,
    marginBottom:20
  },

  input:{
    borderWidth:1,
    padding:10,
    marginBottom:10
  }

});