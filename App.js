import React, { Component } from 'react';

import { createStackNavigator, createAppContainer, createSwitchNavigator, createMaterialTopTabNavigator, createDrawerNavigator } from "react-navigation";

import { ScrollView, SafeAreaView } from 'react-native';
import { DrawerItems } from 'react-navigation';

import { Provider } from 'react-redux';

import configureStore from './src/store/configureStore';

import { appTabRoutes, authRoutes } from './Routes';

import PlaceDetailModal from './src/screens/PlaceDetailModal/PlaceDetailModal';
import MenuIcon from './src/components/MenuIcon/MenuIcon';

let store = configureStore();

const AuthStack = createStackNavigator(authRoutes);

const AppTab = createMaterialTopTabNavigator(appTabRoutes,
  {
    initialRouteName: 'FindPlace',
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
    navigationOptions: ({ navigation }) => {
      console.log('AppStack ', navigation);
      return {
        title: navigation.state.routes[navigation.state.index].key,
        headerLeft: <MenuIcon onPress={navigation.openDrawer} />
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

export const DrawerContentComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const DrawerAppStack = createDrawerNavigator({
  AppStack,
}, {
    contentComponent: DrawerContentComponent
  });

const AppNav = createAppContainer(createSwitchNavigator({
  Auth: AuthStack,
  App: DrawerAppStack,
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