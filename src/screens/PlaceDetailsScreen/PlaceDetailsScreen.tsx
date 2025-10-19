import type { RouteProp } from '@react-navigation/native';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './styles';

import { CustomText, PlaceDetails } from 'src/components/ui';
import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import { setSafeArea } from 'src/redux/slices/mode/slice';
import { selectPlaceById } from 'src/redux/slices/places/selectors';
import { setSelectedPlace } from 'src/redux/slices/places/slice';
import type {
  RootStackNavigationProp,
  RootStackParamsList,
} from 'src/types/navigation/root';
import { sharePlace } from 'src/utils/share';

type PlaceDetailsRouteProp = RouteProp<RootStackParamsList, 'PlaceDetails'>;

const PlaceDetailsScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<RootStackNavigationProp>();
  const route = useRoute<PlaceDetailsRouteProp>();
  const { id, fromScreen } = route.params;

  const selectedItem = useAppSelector(selectPlaceById(id));

  const insets = useSafeAreaInsets();

  const shouldShowMapButton = fromScreen !== 'MapScreen';

  const handleBack = () => {
    navigation.goBack();
  };

  const handleNavigate = () => {
    if (selectedItem) {
      dispatch(setSelectedPlace(selectedItem));
      navigation.navigate('MainStack', {
        screen: 'MapStack',
      });
    }
  };

  const handleShare = () => {
    if (!selectedItem) return;

    sharePlace(selectedItem);
  };

  useFocusEffect(
    useCallback(() => {
      dispatch(setSafeArea(false));

      return () => {
        dispatch(setSafeArea(true));
      };
    }, [dispatch]),
  );

  if (!selectedItem) {
    return <CustomText>Oups nothing to render</CustomText>;
  }

  return (
    <View style={styles.container}>
      <PlaceDetails
        place={selectedItem}
        onBackPress={handleBack}
        safeAreaInsets={insets}
        handleNavigate={handleNavigate}
        handleShare={handleShare}
        showMapButton={shouldShowMapButton}
      />
    </View>
  );
};

export default PlaceDetailsScreen;
