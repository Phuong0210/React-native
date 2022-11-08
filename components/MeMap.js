import MapView, {Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import React from 'react';
import { View, StyleSheet} from "react-native";
const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   height: 400,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

export default () => (
   <View style={styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE}
       style={styles.map}
       region={{
         latitude:16.062502,
         longitude:  108.241994 ,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
       showsUserLocation={false}
       zoomEnabled={true}
       zoomControlEnabled={true}
     >
       <Marker 
          coordinate={{ latitude: 16.062502, longitude: 108.241994  }}  
           title={"Lyly-Restaurant"}
          description={"64-74 Tô Hiến Thành, Phước Mỹ, Sơn Trà, Đà Nẵng-Việt Nam"}         
        >
          
        </Marker>
     </MapView>
   </View>
);