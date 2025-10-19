import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomScreenWrapper,
  CustomText,
  ShareSvg,
} from 'src/components/ui';
import { LOGO_IMG } from 'src/constants';
import { sharePlace } from 'src/utils/share';

const AboutScreen = () => {
  const handleShare = () => {
    sharePlace();
  };

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <View style={styles.contentGroup}>
        <View style={styles.logoWrapper}>
          <Image source={LOGO_IMG} resizeMode="cover" style={styles.logo} />
        </View>

        <View style={styles.textWrapper}>
          <CustomText extraStyle={styles.text}>
            McPhill Guide is your personal guide to Winnipeg.
          </CustomText>
          <CustomText extraStyle={styles.text}>
            The app will help you discover the best places for nature, history
            and entertainment, save your favorite locations and plan your trip
            with an interactive map.
          </CustomText>
        </View>
      </View>

      <View style={styles.btnWrapper}>
        <CustomButton
          extraStyle={styles.btn}
          handlePress={handleShare}
          variant="secondary"
        >
          <ShareSvg width={36} height={36} />
        </CustomButton>
      </View>
    </CustomScreenWrapper>
  );
};

export default AboutScreen;
