import AuthScreen from './src/screens/Auth/Auth';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';

import { mapStateToProps, mapDispatchToProps } from './src/store/maps';

import { connect } from 'react-redux';

export const appTabRoutes = {
    FindPlace: {
        screen: connect(mapStateToProps, mapDispatchToProps)(FindPlaceScreen),
        navigationOptions: {
            header: null  //Need to set header as null.
        },
    },
    SharePlace: {
        screen: connect(mapStateToProps, mapDispatchToProps)(SharePlaceScreen),
        navigationOptions: {
            header: null  //Need to set header as null.
        }
    }
}

export const authRoutes = {
    Auth : {
        screen: connect(mapStateToProps, mapDispatchToProps)(AuthScreen),
    }
}