import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

import PlaceList from '../../components/PlaceList/PlaceList';

class FindPlaceScreen extends Component {

    static navigationOptions = {
        title: 'Find place',
        tabBarLabel: 'Find place tab',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-globe" size={20} color={tintColor}  />
        ),
    };

    showModal = (place) => {
        this.props.navigation.navigate('PlaceDetailModal', {
            place: place,
        })
    }

    render() {
        return (
            <View>
                <PlaceList places={this.props.places} viewDetails={this.showModal}/>
            </View>
        );
    }
}

export default FindPlaceScreen;