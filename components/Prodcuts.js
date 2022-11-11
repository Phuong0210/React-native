import React, { useState } from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  FlatList,Image
} from 'react-native';

const Products = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getDataUsingSimpleGetCall = () => {
    axios.get('https://62b13ad7196a9e987031ac4a.mockapi.io/A-products')
      .then((json) => setData(json.data))
      .finally(() => setLoading(false));
  };

  const renderItem = (itemData) => {
    return (
      <View style={styles.containerFlate}>
        

          <View style={{
            width: 147,
            height: 128,
            marginTop:6,
            marginHorizontal:15,
            backgroundColor: '#F5F7FA'
          }}>
            <Image
              style={styles.img}
              source={{uri:itemData.item.productImage}}
            />
          </View>
          <Text style={styles.proName}>{itemData.item.productName}</Text>
          <Text style={styles.proPrice}>${itemData.item.productPrice}</Text>
        </View>

      

    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      {isLoading &&
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={getDataUsingSimpleGetCall}>
          <Text>Simple Get Call</Text>
        </TouchableOpacity>
      }

      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  containerFlate: {
    width: '42%',
    borderRadius: 20,
    borderWidth: 1,
    marginHorizontal:16,
    marginBottom:5,
    marginTop:60
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
    marginTop: 400,
  },
  proName: {
    marginLeft: 16,
    marginBottom: 8,
    width: 108,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 19,
    color: '#090F47'
  },
  proPrice: {
    marginLeft: 16,
    marginBottom: 10,
    width: 108,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 19,
    color: '#090F47'
  },
  img: {
    margin: 20,
    width: 100,
    height: 100,
  }
});

export default Products;