import React, {useState} from 'react';
import { View, Text, StyleSheet, Image,FlatList, ImageBackground, ScrollView, TouchableOpacity} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailProduct from './DetailProduct';
function HomeScreen({ navigation}) {
  const [products, setProducts] = useState([
    {
      id:0,
      name:'Sugar Substitute',
      img:require('./image/banhmi.jpg'),
      price:''
    },
    {
      id:1,
      name:'Juices & Vinegars',
      img:require('./image/ca.jpg'),
      price:''
    },
    {
      id:2,
      name:'Vitamins Medicines',
      img: require('./image/chickenrice.jpg'),
      price:''
    },
    {
      id:3,
      name:'Vitamins Medicines',
      img:require('./image/thitbo.jpg'),
      price:''
    }
  ]);
  const [listProducts, setListProducts] = useState([
    {
      id:0,
      name:'Caca',
      img: require('./image/ca.jpg'),
      price:'112'
    },
    {
      id:1,
      name:'Omron HEM-8712 BP Monitor',
      img: require('./image/chickenrice.jpg'),
      price:'150'
    },
    {
      id:2,
      name:'Accu-check Active Test Strip',
      img: require('./image/banhmi.jpg'),
      price:'112'
    },
    {
      id:3,
      name:'Omron HEM-8712 BP Monitor',
      img: require('./image/thitbo.jpg'),
      price:'150'
    },
    {
    id:4,
    name:'Sugar Substitute',
    img:require('./image/banhmi.jpg'),
    price:''
  },
  {
    id:5,
    name:'Juices & Vinegars',
    img:require('./image/ca.jpg'),
    price:''
  },
  {
    id:6,
    name:'Vitamins Medicines',
    img: require('./image/chickenrice.jpg'),
    price:''
  },
  {
    id:7,
    name:'Vitamins Medicines',
    img:require('./image/thitbo.jpg'),
    price:''
  }
  ]);
  return(
    <View style={styles.container}>
      <View style={styles.banner}>
        <ImageBackground source={require("./image/banner.jpg" )}  style={styles.image}>
          <View style={styles.txtGroup}>
            <Text style={styles.text}>Let's try new dish</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.product}>
        <Text style={styles.title}>
          Hot Dish
        </Text>
        <ScrollView horizontal={true}>
        <FlatList
        horizontal
        data={products}
        keyExtractor={item => item.name}
        renderItem={({item}) => {
          return <View
          style={{
            width: 110,
            height: 162,
            backgroundColor: '#F5F7FA',
            borderRadius: 10,
            marginRight: 16
          }}>
            <Image
              style={{
                width: 110,
                height: 100,
              }}
              source={item.img}/>
            <Text
              style={{
                width: 60,
                fontSize: 13,
                fontWeight: '400',
                color: '#090F47',
                lineHeight: 18
              }}>{item.name}</Text>
          </View>
        }}>
        </FlatList>
        </ScrollView>
      </View>
      <View style={styles.allProducts}>
        <Text style={styles.titlePro}>All Products</Text>
        <TouchableOpacity  onPress={()=>{
            navigation.navigate('DetailProduct')
          }}>
          <ScrollView>
          <FlatList
          numColumns={2}
          data={listProducts}
          keyExtractor={item => item.name}
          renderItem = {({item}) => {
            return <View style={styles.bgListProducts}>
              <View style={{
                width: 167,
                height: 158,
                backgroundColor: '#F5F7FA'
              }}>
                <Image
                style={styles.img}
                source={item.img}
                />
              </View>
              <Text style={styles.proName}>{item.name}</Text>
              <Text style={styles.proPrice}>${item.price}</Text>
            </View>
          }}>
          </FlatList>
        </ScrollView>
          </TouchableOpacity>
        
      </View>
    </View>
  );
}
const Stack = createNativeStackNavigator();
export default function HomeTab()  {
    return (
    <Stack.Navigator initialRouteName="">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DetailProduct" component={DetailProduct} />
    </Stack.Navigator>
    );
  }
const styles =  StyleSheet.create({
  container:{
    flex:1,
    paddingLeft: 25,
    paddingRight: 25
  },
  banner: {
    position: 'relative',
    marginTop: 45,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  txtGroup:{
    position: 'absolute',
  },
  text: {
    marginTop: 60,
    marginLeft: 95,
    marginBottom: 6,
    width: 150,
    height: 42,
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
    lineHeight: 21,
    fontFamily:'Overpass'
  },
  product:{
    flex:1,
  },
  title:{
    marginTop: 19,
    marginBottom: 16,
    color: '#090F47',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20
  },
  allProducts:{
    flex:2,
  },
  titlePro:{
    marginTop: 15,
    marginBottom: 24,
    color: '#090F47',
    fontSize:16,
    fontWeight: '600',
    lineHeight: 20
  },
  bgListProducts:{
    flex:1,
    flexDirection: 'column',
    width: 157,
    height: 250,
    backgroundColor: '#FFFFFF',
    marginRight: 14,
    marginBottom: 16
  },
  proName:{
    marginLeft: 16,
    marginBottom: 8,
    width: 108,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 19,
    color: '#090F47'
  },
  proPrice:{
    marginLeft: 16,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 19,
    color: '#090F47',
  },
  img:{
    margin: 20,
    width: 110,
                height: 100,
  }
});