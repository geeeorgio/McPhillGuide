import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import { CustomScreenWrapper, GuideBanner, HomeMenu } from 'src/components/ui';
import type { RecommendedStackNavigationProp } from 'src/types/navigation/recommended';

const RecommendedScreen = () => {
  const navigation = useNavigation<RecommendedStackNavigationProp>();

  return (
    <CustomScreenWrapper extraStyle={styles.main}>
      <View style={styles.guideWrapper}>
        <GuideBanner>Choose the category that interests you.</GuideBanner>
      </View>

      <HomeMenu navigation={navigation} />
    </CustomScreenWrapper>
  );
};

export default RecommendedScreen;
