import React, { Component } from 'react';

import { createStackNavigator, createAppContainer, createSwitchNavigator, createMaterialTopTabNavigator } from "react-navigation";

import { Provider, connect } from 'react-redux';

import configureStore from './src/store/configureStore';

import { appTabRoutes, authRoutes } from './Routes';

import PlaceDetailModal from './src/screens/PlaceDetailModal/PlaceDetailModal';

import Icon from 'react-native-vector-icons/Ionicons';

let store = configureStore();

const AuthStack = createStackNavigator(authRoutes);

const AppTab = createMaterialTopTabNavigator(appTabRoutes,
  {
    initialRouteName: 'FindPlace',
    shifting: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      activeTintColor: 'orange',
      inactiveTintColor: 'grey',
      showIcon: true,
      style: {
        backgroundColor: "#f2f2f2"
      }
    }
  }
);

const AppStack = createStackNavigator({
  AppTab: {
    screen: AppTab,
    navigationOptions: ({navigation})=>{
      return {
        title: navigation.state.routes[navigation.state.index].key,
        headerLeft: <Icon size={30} name='ios-menu'/>
      }
    },
  },
  PlaceDetailModal: PlaceDetailModal,
},
  {
    initialRouteName: "AppTab",
    mode: 'modal',
  }
);

const AppNav = createAppContainer(createSwitchNavigator({
  Auth: AuthStack,
  App: AppStack,
},
  {
    initialRouteName: 'Auth',
  }));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNav />
      </Provider>
    );
  }
}

export default App;