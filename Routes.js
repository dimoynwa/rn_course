import AuthScreen from './src/screens/Auth/Auth';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';

import { mapStateToProps, mapDispatchToProps } from './src/store/maps';

import { connect } from 'react-redux';

export const appTabRoutes = {
    FindPlace: {
        screen: connect(mapStateToProps, mapDispatchToProps)(FindPlaceScreen),
    },
    SharePlace: {
        screen: connect(mapStateToProps, mapDispatchToProps)(SharePlaceScreen),
    }
}

export const authRoutes = {
    Auth : {
        screen: connect(mapStateToProps, mapDispatchToProps)(AuthScreen),
    }
}