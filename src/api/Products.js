// import React, { useState } from 'react';
// import axios from 'axios';
// import {
//     StyleSheet,
//     Text,
//     View,
//     TouchableOpacity,
//     StatusBar,
//     FlatList
// } from 'react-native';

// const Products = () => {
//     const [data, setData] = useState([]);
//     const [isLoading, setLoading] = useState(true);

//     const getDataUsingSimpleGetCall = () => {
//         axios.get('https://62b13ad7196a9e987031ac4a.mockapi.io/A-products')
//             .then((json) => setData(json.data))
//             .finally(() => setLoading(false));
//     };

//     const renderItem = (itemData) => {
//         return (
//             <View style={styles.containerFlate}>
//                 <View style={styles.innerContainer}>
//                     <ScrollView>
//                         <FlatList
//                             numColumns={2}
//                             keyExtractor={item => item.name}
//                             renderItem={({ item }) => {
//                                 return <View style={styles.bgListProducts}>
//                                     <View style={{
//                                         width: 167,
//                                         height: 158,
//                                         backgroundColor: '#F5F7FA'
//                                     }}>
//                                         <Image
//                                             style={styles.img}
//                                             source={itemData.item.productImage}
//                                         />
//                                     </View>
//                                     <Text style={styles.proName}>{itemData.item.productName}</Text>
//                                     <Text style={styles.proPrice}>${itemData.item.productPrice}</Text>
//                                 </View>
//                             }}>
//                         </FlatList>
//                     </ScrollView>
//                 </View>
//             </View>
//         );
//     }

//     return (
//         <View style={styles.container}>
//             <FlatList
//                 data={data}
//                 renderItem={renderItem}
//                 keyExtractor={(item) => item.id}
//             />

//             {isLoading &&
//                 <TouchableOpacity
//                     style={styles.buttonStyle}
//                     onPress={getDataUsingSimpleGetCall}>
//                     <Text>Simple Get Call</Text>
//                 </TouchableOpacity>
//             }

//             <StatusBar />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     containerFlate: {
//         flex: 1,
//         margin: 16,
//         height: 150,
//         borderRadius: 8,
//         elevation: 4,
//         backgroundColor: '#c91111',
//         shadowColor: 'black',
//         shadowOpacity: 0.25,
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowRadius: 8,
//     },
//     buttonStyle: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#DDDDDD',
//         padding: 10,
//         width: '100%',
//         marginTop: 400,
//     },
//     innerContainer: {
//         flex: 1,
//         borderRadius: 8,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     title: {
//         fontWeight: 'bold',
//         fontSize: 18,
//         color: 'white',
//     },
//     bgListProducts:{
//         flex:1,
//         flexDirection: 'column',
//         width: 157,
//         height: 250,
//         backgroundColor: '#FFFFFF',
//         marginRight: 14,
//         marginBottom: 16
//       },
//       proName:{
//         marginLeft: 16,
//         marginBottom: 8,
//         width: 108,
//         fontSize: 13,
//         fontWeight: '400',
//         lineHeight: 19,
//         color: '#090F47'
//       },
//       proPrice:{
//         marginLeft: 16,
//         fontSize: 16,
//         fontWeight: '600',
//         lineHeight: 19,
//         color: '#090F47',
//       },
//       img:{
//         margin: 20,
//         width: 110,
//                     height: 100,
//       }
// });

// export default Products;