import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const defaultInput = (props) => {
    return (
        <TextInput  
            underlineColorAndroid='transparent' 
            {...props}
            style={[styles.input, props.style]} />
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        width: "100%",
        borderColor: '#eee',
        padding: 5,
        margin: 8,
    }
});

export default defaultInput;