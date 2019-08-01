import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

import Icon from 'react-native-vector-icons/Ionicons';

class PlaceDetailModal extends Component {
    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};
        return {
            title: params.place.name,
        };
    };

    render() {
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <Image source={params.place.image} style={styles.placeImage} />
                <Text style={styles.placeName}>{params.place.name}</Text>
                <View>
                    <TouchableOpacity onPress={params.onItemDeleted} >
                        <View style={styles.deleteButton}>
                            <Icon size={30} name='ios-trash' color='red' />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 22
    },
    placeImage: {
        width: "100%",
        height: 200
    },
    placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    },
    deleteButton: {
        alignItems: 'center'
    }
});

export default PlaceDetailModal;