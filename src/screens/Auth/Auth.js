import React, { Component } from 'react'
import { View, Text, Button, TextInput, StyleSheet, ImageBackground } from 'react-native';

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';
import backgroundImage from '../../assets/background.jpg'

class AuthScreen extends Component {

    static navigationOptions = {
        title: 'Login',
    };

    loginHandler = () => {
        this.props.navigation.navigate('App');
    }

    render() {
        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <MainText>
                        <HeadingText>Please Log in</HeadingText>
                    </MainText>
                    <View style={styles.inputContainer}>
                        <DefaultInput placeholder="E-Mail address" style={styles.input} />
                        <DefaultInput placeholder="Password" style={styles.input} />
                        <DefaultInput placeholder="Confirm password" style={styles.input} />
                    </View>
                    <ButtonWithBackground color="#29aaf4">Switch to login</ButtonWithBackground>
                    <ButtonWithBackground color="#29aaf4" onPress={this.loginHandler}>Submit</ButtonWithBackground>

                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        width: "80%"
    },
    input: {
        borderColor: '#bbb',
        backgroundColor: '#eee'
    },
    backgroundImage: {
        width: "100%",
        flex: 1,
    }
});

export default AuthScreen;