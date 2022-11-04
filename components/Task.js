
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailProduct from './DetailProduct';

function HomeScreen({ navigation }) {
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
          <TouchableOpacity  onPress={()=>{
            navigation.navigate('DetailProduct')
          }}>
          <Text>Your Order</Text>
          </TouchableOpacity>
        </View>
      )
}
const Stack = createNativeStackNavigator();
function Task() {
    return (
    <Stack.Navigator initialRouteName="Your order">
        <Stack.Screen name="Your order" component={HomeScreen} />
        <Stack.Screen name="DetailProduct" component={DetailProduct} />
    </Stack.Navigator>
    );
  }
  export default Task;
  



const styles = StyleSheet.create({})