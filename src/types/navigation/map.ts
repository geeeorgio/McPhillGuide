import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type MapStackParamsList = {
  MapScreen: { placeId?: string };
};

export type MapStackNavigationProp = NativeStackNavigationProp<
  MapStackParamsList,
  'MapScreen'
>;
