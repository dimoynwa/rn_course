import React, {Component} from 'react'
import {View, Text, Button} from 'react-native';

class AuthScreen extends Component {

    static navigationOptions = {
        title: 'Auth',
    };

    loginHandler = () => {
        this.props.navigation.navigate('App');
    }

    render() {
        return (
            <View>
                <Text>Auth Screen</Text>
                <Button title="Login" onPress={this.loginHandler}/>
            </View>
        );
    }
}

export default AuthScreen;