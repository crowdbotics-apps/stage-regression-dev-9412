import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen110322Navigator from '../features/BlankScreen110322/navigator';
import BlankScreen110317Navigator from '../features/BlankScreen110317/navigator';
import BlankScreen010316Navigator from '../features/BlankScreen010316/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen110322: { screen: BlankScreen110322Navigator },
BlankScreen110317: { screen: BlankScreen110317Navigator },
BlankScreen010316: { screen: BlankScreen010316Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
