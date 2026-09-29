import { useState } from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { createPerson } from '../../application/createPerson';


export default function PersonScreen(){

const [name,setName]=useState('');
const [phone,setPhone]=useState('');


async function handleSave(){

try{

await createPerson({
 name,
 phone
});


Alert.alert('Success','Person saved');

setName('');
setPhone('');

}catch(error){

Alert.alert('Error','Complete fields');

}

}


return(

<View style={styles.container}>

<Text style={styles.title}>
Register Person
</Text>


<TextInput
style={styles.input}
placeholder="Name"
value={name}
onChangeText={setName}
/>


<TextInput
style={styles.input}
placeholder="Phone"
value={phone}
onChangeText={setPhone}
/>


<Button
title="Save Person"
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