import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainNavigator from './MainNavigator';
import OnboardingNavigator from './OnboardingNavigator';

import { Layout } from 'src/components/layout';
import { useAppSelector } from 'src/hooks/toolkit';
import { selectIsOnboardingDone } from 'src/redux/slices/onboarding/selectors';
import { PlaceDetailsScreen } from 'src/screens';
import type { RootStackParamsList } from 'src/types/navigation/root';

const Root = createNativeStackNavigator<RootStackParamsList>();

const RootNavigator = () => {
  const isOnboardingDone = useAppSelector(selectIsOnboardingDone);

  const initialRouteName: keyof RootStackParamsList = isOnboardingDone
    ? 'MainStack'
    : 'OnboardingStack';

  return (
    <Layout>
      <Root.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: 'transparent',
          },
          gestureEnabled: false,
          animation: 'fade',
        }}
        initialRouteName={initialRouteName}
      >
        <Root.Screen name={'OnboardingStack'} component={OnboardingNavigator} />

        <Root.Screen name={'MainStack'} component={MainNavigator} />

        <Root.Screen name={'PlaceDetails'} component={PlaceDetailsScreen} />
      </Root.Navigator>
    </Layout>
  );
};

export default RootNavigator;
