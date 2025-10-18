import type { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import CustomContainer from '../CustomContainer/CustomContainer';
import BackSvg from '../CustomIcons/BackSvg';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import type { MenuItemData } from 'src/types';

interface CategoryHeaderOptions {
  headerData?: {
    data: MenuItemData;
  };
}

const CategoryHeader = ({ options, navigation }: NativeStackHeaderProps) => {
  const customOptions = options as CategoryHeaderOptions;
  const item = customOptions.headerData?.data;
  const title = options.title as string;

  return (
    <View style={styles.container}>
      <CustomButton
        handlePress={navigation.goBack}
        extraStyle={styles.backButton}
        variant="secondary"
      >
        <BackSvg width={34} height={34} />
      </CustomButton>

      <CustomContainer extraStyle={styles.menuItemContainer}>
        <Image source={item?.image} style={styles.icon} resizeMode="contain" />

        <View style={styles.textContent}>
          <CustomText extraStyle={styles.title}>{title}</CustomText>
          <CustomText extraStyle={styles.desription}>
            {item?.description}
          </CustomText>
        </View>
      </CustomContainer>
    </View>
  );
};

export default CategoryHeader;
