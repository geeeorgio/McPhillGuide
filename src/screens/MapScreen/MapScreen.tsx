import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './styles';

import { MapCard, PlaceListItem } from 'src/components/ui';
import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import { setSafeArea } from 'src/redux/slices/mode/slice';
import {
  selectPlaces,
  selectSelectedPlace,
} from 'src/redux/slices/places/selectors';
import { resetSelectedPlace } from 'src/redux/slices/places/slice';
import type { RootStackNavigationProp } from 'src/types/navigation/root';
import { hp } from 'src/utils/scaling';

const MapScreen = () => {
  const dispatch = useAppDispatch();

  const navigation = useNavigation<RootStackNavigationProp>();

  const selectedPlace = useAppSelector(selectSelectedPlace);

  const placesList = useAppSelector(selectPlaces);

  const [shouldRenderMap, setShouldRenderMap] = useState(false);

  const handleNavigateToDetails = (id: string) => {
    navigation.navigate('PlaceDetails', {
      id: id,
      fromScreen: 'MapScreen',
    });
  };

  const handleCloseCard = () => {
    dispatch(resetSelectedPlace());
  };

  useFocusEffect(
    useCallback(() => {
      setShouldRenderMap(true);
      dispatch(setSafeArea(false));

      return () => {
        setShouldRenderMap(false);
        dispatch(setSafeArea(true));
      };
    }, [dispatch]),
  );

  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      {shouldRenderMap ? (
        <MapCard place={selectedPlace} placesList={placesList} />
      ) : (
        <View style={styles.container} />
      )}
      {selectedPlace && (
        <View
          style={[
            styles.selectedPlaceWrapper,
            { bottom: insets.bottom + hp(120) },
          ]}
        >
          <PlaceListItem
            item={selectedPlace}
            onNavigate={handleNavigateToDetails}
            onClose={handleCloseCard}
          />
        </View>
      )}
    </View>
  );
};

export default MapScreen;
