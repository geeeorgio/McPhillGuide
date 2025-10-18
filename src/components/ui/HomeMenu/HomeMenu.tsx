import React from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';

import CustomContainer from '../CustomContainer/CustomContainer';
import AnimatedArrows from '../CustomIcons/AnimatedArrows';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import { MENU } from 'src/constants';
import type { MenuItemData, PlacesCategory } from 'src/types';
import type { RecommendedStackNavigationProp } from 'src/types/navigation/recommended';

interface HomeMenuProps {
  navigation?: RecommendedStackNavigationProp;
}

const HomeMenu = ({ navigation }: HomeMenuProps) => {
  const menuItems = Object.entries(MENU) as [PlacesCategory, MenuItemData][];

  const handleNavigate = (
    categoryKey: PlacesCategory,
    itemData: MenuItemData,
  ) => {
    navigation?.navigate('CategoryListScreen', {
      category: categoryKey,
      description: itemData,
    });
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      {menuItems.map(([key, item]) => (
        <TouchableOpacity key={key} onPress={() => handleNavigate(key, item)}>
          <CustomContainer extraStyle={styles.menuItemContainer}>
            <Image
              source={item.image}
              style={styles.icon}
              resizeMode="contain"
            />

            <View style={styles.textContent}>
              <CustomText extraStyle={styles.title}>{key}</CustomText>
              <CustomText extraStyle={styles.desription}>
                {item.description}
              </CustomText>
            </View>

            <View style={styles.arrows}>
              <AnimatedArrows />
            </View>
          </CustomContainer>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default HomeMenu;
