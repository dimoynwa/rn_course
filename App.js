import React, { Component } from "react";

import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createMaterialTopTabNavigator,
  createDrawerNavigator
} from "react-navigation";

import { Provider } from "react-redux";

import configureStore from "./src/store/configureStore";

import { appTabRoutes, authRoutes } from "./Routes";

import PlaceDetailModal from "./src/screens/PlaceDetailModal/PlaceDetailModal";
import MenuIcon from "./src/components/MenuIcon/MenuIcon";
import DrawerContentComponent from "./src/components/DrawerContentComponent/DrawerContentComponent";

import Icon from "react-native-vector-icons/Ionicons";

let store = configureStore();

const AuthStack = createStackNavigator(authRoutes);

const AppTab = createMaterialTopTabNavigator(appTabRoutes, {
  initialRouteName: "FindPlace",
  tabBarPosition: "bottom",
  tabBarOptions: {
    activeTintColor: "orange",
    inactiveTintColor: "grey",
    showIcon: true,
    style: {
      backgroundColor: "#f2f2f2"
    }
  }
});

const AppStack = createStackNavigator(
  {
    AppTab: {
      screen: AppTab,
      navigationOptions: ({ navigation }) => {
        console.log("AppStack ", navigation);
        return {
          title: navigation.state.routes[navigation.state.index].key,
          headerLeft: <MenuIcon onPress={navigation.openDrawer} />
        };
      }
    },
    PlaceDetailModal: PlaceDetailModal
  },
  {
    initialRouteName: "AppTab",
    mode: "modal",
    navigationOptions: {
      drawerIcon: tintColor => {
        <Icon name="ios-home" style={{ fontSize: 24, color: tintColor }} />;
      }
    }
  }
);

const DrawerAppStack = createDrawerNavigator(
  {
    AppStack
  },
  {
    contentComponent: DrawerContentComponent,
    contentOptions: {
      activeTintColor: "orange"
    }
  }
);

const AppNav = createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
      App: DrawerAppStack
    },
    {
      initialRouteName: "Auth"
    }
  )
);

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
