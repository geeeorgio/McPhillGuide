import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  CategoryListScreen,
  PlaceDetailsScreen,
  RecommendedScreen,
} from 'src/screens';
import type { RecommendedStackParamsList } from 'src/types/navigation/recommended';

const Recomended = createNativeStackNavigator<RecommendedStackParamsList>();

const RecommendedNavigator = () => {
  return (
    <Recomended.Navigator>
      <Recomended.Screen
        name="RecomendedScreen"
        component={RecommendedScreen}
      />
      <Recomended.Screen
        name="CategoryListScreen"
        component={CategoryListScreen}
      />

      <Recomended.Screen
        name="PlaceDetailsScreen"
        component={PlaceDetailsScreen}
      />
    </Recomended.Navigator>
  );
};

export default RecommendedNavigator;
