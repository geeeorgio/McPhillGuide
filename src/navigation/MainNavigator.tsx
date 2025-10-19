import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RecommendedNavigator from './RecomendedNavigator';
import SavedNavigator from './SavedNavigator';

import { CustomTabBar, CustomTabBarHeader } from 'src/components/ui';
import { AboutScreen, MapScreen } from 'src/screens';
import type { MainTabsStackParamsList } from 'src/types/navigation/main';

const Main = createBottomTabNavigator<MainTabsStackParamsList>();

const MainNavigator = () => {
  return (
    <Main.Navigator
      screenOptions={{
        header: (props) => <CustomTabBarHeader {...props} />,
        sceneStyle: { backgroundColor: 'transparent' },
        tabBarShowLabel: false,
        animation: 'fade',
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Main.Screen
        name="RecommendedStack"
        options={{ title: 'Recommended places' }}
        component={RecommendedNavigator}
      />
      <Main.Screen
        name="SavedStack"
        options={{ title: 'Saved places' }}
        component={SavedNavigator}
      />
      <Main.Screen
        name="MapStack"
        options={{
          title: 'Interactive map',
          headerTransparent: true,
        }}
        component={MapScreen}
      />
      <Main.Screen
        name="AboutScreen"
        options={{ title: 'About' }}
        component={AboutScreen}
      />
    </Main.Navigator>
  );
};

export default MainNavigator;
