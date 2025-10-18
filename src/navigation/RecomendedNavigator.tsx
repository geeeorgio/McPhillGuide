import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CategoryHeader } from 'src/components/ui';
import { CategoryListScreen, RecommendedScreen } from 'src/screens';
import type { RecommendedStackParamsList } from 'src/types/navigation/recommended';

const Recomended = createNativeStackNavigator<RecommendedStackParamsList>();

const RecommendedNavigator = () => {
  return (
    <Recomended.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'transparent' },
        animation: 'fade',
      }}
    >
      <Recomended.Screen
        name="RecomendedScreen"
        component={RecommendedScreen}
      />
      <Recomended.Screen
        options={{
          headerShown: true,
          header: (props) => <CategoryHeader {...props} />,
        }}
        name="CategoryListScreen"
        component={CategoryListScreen}
      />
    </Recomended.Navigator>
  );
};

export default RecommendedNavigator;
