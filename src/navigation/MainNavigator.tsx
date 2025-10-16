import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MapNavigator from './MapNavigator';
import RecommendedNavigator from './RecomendedNavigator';
import SavedNavigator from './SavedNavigator';

import { AboutScreen } from 'src/screens';
import type { MainTabsStackParamsList } from 'src/types/navigation/main';

const Main = createBottomTabNavigator<MainTabsStackParamsList>();

const MainNavigator = () => {
  return (
    <Main.Navigator
      screenOptions={{
        headerShown: false,
        sceneStyle: { backgroundColor: 'transparent' },
        tabBarShowLabel: false,
        animation: 'fade',
      }}
    >
      <Main.Screen name="RecommendedStack" component={RecommendedNavigator} />
      <Main.Screen name="SavedStack" component={SavedNavigator} />
      <Main.Screen name="MapStack" component={MapNavigator} />
      <Main.Screen name="AboutScreen" component={AboutScreen} />
    </Main.Navigator>
  );
};

export default MainNavigator;
