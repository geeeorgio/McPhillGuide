import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PlaceDetailsScreen, SavedScreen } from 'src/screens';
import type { SavedStackParamsList } from 'src/types/navigation/saved';

const Saved = createNativeStackNavigator<SavedStackParamsList>();

const SavedNavigator = () => {
  return (
    <Saved.Navigator>
      <Saved.Screen name="SavedScreen" component={SavedScreen} />
      <Saved.Screen name="PlaceDetailsScreen" component={PlaceDetailsScreen} />
    </Saved.Navigator>
  );
};

export default SavedNavigator;
