import type { ReactNode } from 'react';
import React from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Image, View } from 'react-native';

import CustomContainer from '../CustomContainer/CustomContainer';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import { GUIDE_1_MIRORED } from 'src/constants';

interface GuideBannerProps {
  children: ReactNode;
  textStyle?: StyleProp<TextStyle>;
  viewStyle?: StyleProp<ViewStyle>;
}

const GuideBanner = ({ children, textStyle, viewStyle }: GuideBannerProps) => {
  return (
    <CustomContainer extraStyle={[styles.guideBanner, viewStyle]}>
      <View style={styles.imageWrapper}>
        <Image
          source={GUIDE_1_MIRORED}
          resizeMode="contain"
          style={styles.img}
        />
      </View>

      <CustomText extraStyle={[styles.text, textStyle]}>{children}</CustomText>
    </CustomContainer>
  );
};

export default GuideBanner;
