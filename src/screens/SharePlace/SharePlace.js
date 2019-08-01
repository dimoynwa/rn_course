import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import PlaceInput from '../../components/PlaceInput/PlaceInput';

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
            <View>
                <PlaceInput onPlaceAdded={this.props.onAddPlace}/>
            </View>
        )
    }
}

export default SharePlaceScreen;