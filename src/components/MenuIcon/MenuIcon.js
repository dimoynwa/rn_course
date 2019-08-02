import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const MenuIcon = (props) => {
    return (
        <View>
            <TouchableOpacity onPress={props.onPress} >
                <View style={styles.button}>
                    <Icon size={30} name='ios-menu' />
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 20
    }
});

export default MenuIcon;