import type { ReactNode } from 'react';
import React from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Image, View } from 'react-native';

import CustomContainer from '../CustomContainer/CustomContainer';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import { GUIDE_1_MIRORED, LOGO_IMG, TITLE_IMG } from 'src/constants';

interface GuideBannerProps {
  children: ReactNode;
  textStyle?: StyleProp<TextStyle>;
  viewStyle?: StyleProp<ViewStyle>;
}

const GuideBanner = ({ children, textStyle, viewStyle }: GuideBannerProps) => {
  return (
    <CustomContainer extraStyle={[styles.guideBanner, viewStyle]}>
      <View style={styles.imageWrapper}>
        <Image source={LOGO_IMG} resizeMode="cover" style={styles.img} />
      </View>

      <CustomText extraStyle={[styles.text, textStyle]}>{children}</CustomText>
    </CustomContainer>
  );
};

export default GuideBanner;
