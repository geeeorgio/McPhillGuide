import type { RouteProp } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useLayoutEffect } from 'react';
import { StyleSheet } from 'react-native';

import { CustomScreenWrapper, CustomText } from 'src/components/ui';
import type { RecommendedStackParamsList } from 'src/types/navigation/recommended';

type CategoryListProps = NativeStackScreenProps<
  RecommendedStackParamsList,
  'CategoryListScreen'
>;

type CategoryListRouteProp = RouteProp<
  RecommendedStackParamsList,
  'CategoryListScreen'
>;

const CategoryListScreen = ({ navigation }: CategoryListProps) => {
  const route = useRoute<CategoryListRouteProp>();

  const { category, description } = route.params;

  useLayoutEffect(() => {
    const customOptions = {
      title: category,
      headerData: { data: description },
    };
    navigation.setOptions(customOptions);
  }, [navigation, category, description]);

  return (
    <CustomScreenWrapper>
      <CustomText>CategoryListScreen</CustomText>
    </CustomScreenWrapper>
  );
};

export default CategoryListScreen;

const styles = StyleSheet.create({});
