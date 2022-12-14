import React, { Component } from 'react';
import MapView, {Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
export default function DetailProduct() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Image style={styles.avatar}
                        source={require('./image/banhmi.jpg')} />

                    <Text style={styles.name}>Banh Mi </Text>
                    <Text style={styles.userInfo}>12.000VND</Text>
                    <Text style={styles.userInfo}>Special life</Text>
                </View>
            </View>

            <View style={styles.body}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    region={{
                        latitude: 16.062502,
                        longitude: 108.241994,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                    showsUserLocation={false}
                    zoomEnabled={true}
                    zoomControlEnabled={true}
                >
                    <Marker
                        coordinate={{ latitude: 16.062502, longitude: 108.241994 }}
                        title={"Lyly-Restaurant"}
                        description={"64-74 Tô Hiến Thành, Phước Mỹ, Sơn Trà, Đà Nẵng-Việt Nam"}
                    >

                    </Marker>
                </MapView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#DCDCDC",
    },
    headerContent: {
        padding: 30,
        alignItems: 'center',
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
    },
    name: {
        fontSize: 22,
        color: "#000000",
        fontWeight: '600',
    },
    userInfo: {
        fontSize: 16,
        color: "#778899",
        fontWeight: '600',
    },

    body: {

        height: 200,
        width: 500,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFill,
    },
});