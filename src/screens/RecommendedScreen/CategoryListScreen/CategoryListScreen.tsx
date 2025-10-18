import type { RouteProp } from '@react-navigation/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';

import { styles } from './styles';

import { CustomScreenWrapper, PlacesList } from 'src/components/ui';
import { PLACES } from 'src/constants';
import type { RecommendedStackParamsList } from 'src/types/navigation/recommended';
import type { RootStackNavigationProp } from 'src/types/navigation/root';

type CategoryListRouteProp = RouteProp<
  RecommendedStackParamsList,
  'CategoryListScreen'
>;

const CategoryListScreen = () => {
  const route = useRoute<CategoryListRouteProp>();
  const navigation = useNavigation<RootStackNavigationProp>();

  const { category, description } = route.params;

  const handleNavigateToDetails = (id: string) => {
    navigation.navigate('PlaceDetails', {
      id: id,
      fromScreen: 'CategoryListScreen',
    });
  };

  const placesList = PLACES.filter((place) => place.category === category);

  useLayoutEffect(() => {
    const customOptions = {
      title: category,
      headerData: { data: description },
    };
    navigation.setOptions(customOptions);
  }, [navigation, category, description]);

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <PlacesList places={placesList} onNavigate={handleNavigateToDetails} />
    </CustomScreenWrapper>
  );
};

export default CategoryListScreen;
