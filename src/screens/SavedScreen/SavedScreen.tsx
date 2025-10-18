import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import {
  CustomScreenWrapper,
  GuideBanner,
  PlacesList,
} from 'src/components/ui';
import { useAppSelector } from 'src/hooks/toolkit';
import { selectFavouritePlaces } from 'src/redux/slices/places/selectors';
import type { RootStackNavigationProp } from 'src/types/navigation/root';

const SavedScreen = () => {
  const savedPlaces = useAppSelector(selectFavouritePlaces);

  const navigation = useNavigation<RootStackNavigationProp>();

  const handleNavigateToDetails = (id: string) => {
    navigation.navigate('PlaceDetails', {
      id: id,
      fromScreen: 'SavedScreen',
    });
  };

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      {savedPlaces.length > 0 ? (
        <View style={styles.listContainer}>
          <PlacesList
            places={savedPlaces}
            onNavigate={handleNavigateToDetails}
          />
        </View>
      ) : (
        <View style={styles.guideContainer}>
          <GuideBanner viewStyle={styles.guide} textStyle={styles.text}>
            You don't have any saved locations yet.
          </GuideBanner>
        </View>
      )}
    </CustomScreenWrapper>
  );
};

export default SavedScreen;
