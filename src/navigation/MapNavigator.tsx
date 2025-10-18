import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MapScreen } from 'src/screens';
import type { MapStackParamsList } from 'src/types/navigation/map';

const MapNav = createNativeStackNavigator<MapStackParamsList>();

const MapNavigator = () => {
  return (
    <MapNav.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'transparent' },
        animation: 'fade',
      }}
    >
      <MapNav.Screen name="MapScreen" component={MapScreen} />
    </MapNav.Navigator>
  );
};

export default MapNavigator;
