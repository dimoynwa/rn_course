import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ScrollView, Image } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import imagePlaceholder from '../../assets/beautiful-place.jpg';

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';

class SharePlaceScreen extends Component {

    static navigationOptions = {
        title: 'Share place',
        tabBarLabel: 'Share place tab',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-locate" size={20} color={tintColor} />
        ),
    };

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <MainText>
                        <HeadingText>Share place with us!</HeadingText>
                    </MainText>
                    <View style={styles.placeholder}>
                        <Image source={imagePlaceholder} style={styles.previewImage}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Pick an image" />
                    </View>
                    <View style={styles.placeholder}>
                        <Text>Map</Text>
                    </View>
                    <View style={styles.button}>
                        <Button title="Locate me" />
                    </View>
                    <DefaultInput placeholder="Name the place" />
                    <View style={styles.button}>
                        <Button title="Share the place" />
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    placeholder: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#eee',
        width: "80%",
        height: 150,
    },
    button: {
        margin: 8
    },
    previewImage: {
        width: "100%",
        height: "100%",
    }
});

export default SharePlaceScreen;