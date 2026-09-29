import { useState } from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { createProduct } from '../../application/createProduct';


export default function ProductScreen(){

  const [name,setName]=useState('');
  const [price,setPrice]=useState('');


  async function handleSave(){

    try{

      await createProduct({
        name,
        price:Number(price)
      });

      Alert.alert('Success','Product saved');

      setName('');
      setPrice('');

    }catch(error){

      Alert.alert('Error','Invalid data');

    }

  }


  return(

    <View style={styles.container}>

      <Text style={styles.title}>
        Register Product
      </Text>


      <TextInput
        style={styles.input}
        placeholder="Product name"
        value={name}
        onChangeText={setName}
      />


      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />


      <Button
        title="Save Product"
        onPress={handleSave}
      />

    </View>

  );

}


const styles=StyleSheet.create({

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