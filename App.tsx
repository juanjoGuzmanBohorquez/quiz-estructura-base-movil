import { useEffect, useState } from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { initDatabase } from './src/infrastructure/database/database';

import UserScreen from './src/presentation/users/UserScreen';
import ProductScreen from './src/presentation/products/ProductScreen';
import PersonScreen from './src/presentation/persons/PersonScreen';


type Screen = 'users' | 'products' | 'persons';


export default function App() {

  const [screen, setScreen] = useState<Screen>('users');


  useEffect(() => {

    initDatabase();

  }, []);



  return (

    <SafeAreaView style={styles.container}>


      <Text style={styles.header}>
        Quiz Mobile SQLite
      </Text>


      <View style={styles.menu}>


        <Button
          title="Users"
          onPress={() => setScreen('users')}
        />


        <Button
          title="Products"
          onPress={() => setScreen('products')}
        />


        <Button
          title="Persons"
          onPress={() => setScreen('persons')}
        />


      </View>



      {
        screen === 'users' &&
        <UserScreen />
      }


      {
        screen === 'products' &&
        <ProductScreen />
      }


      {
        screen === 'persons' &&
        <PersonScreen />
      }


    </SafeAreaView>

  );

}



const styles = StyleSheet.create({

  container:{
    flex:1,
    paddingTop:40
  },


  header:{
    textAlign:'center',
    fontSize:24,
    fontWeight:'bold',
    marginBottom:20
  },


  menu:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginBottom:20
  }


});