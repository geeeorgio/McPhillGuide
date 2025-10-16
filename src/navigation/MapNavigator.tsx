import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MapScreen, PlaceDetailsScreen } from 'src/screens';
import type { MapStackParamsList } from 'src/types/navigation/map';

const MapNav = createNativeStackNavigator<MapStackParamsList>();

const MapNavigator = () => {
  return (
    <MapNav.Navigator>
      <MapNav.Screen name="MapScreen" component={MapScreen} />
      <MapNav.Screen name="PlaceDetailsScreen" component={PlaceDetailsScreen} />
    </MapNav.Navigator>
  );
};

export default MapNavigator;
