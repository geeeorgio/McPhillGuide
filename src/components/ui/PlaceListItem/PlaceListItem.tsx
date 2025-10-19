import React from 'react';
import { ImageBackground, Pressable, View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import CloseSvg from '../CustomIcons/CloseSvg';
import LocationSvg from '../CustomIcons/LocationSvg';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import { COLORS } from 'src/constants';
import type { Place } from 'src/types';

interface PlaceListItemProps {
  item: Place;
  onNavigate: (id: string) => void;
  onClose?: () => void;
}

const PlaceListItem = ({ item, onNavigate, onClose }: PlaceListItemProps) => {
  const handlePress = () => {
    onNavigate(item.id);
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
    >
      <View style={styles.wrapper}>
        <ImageBackground
          source={item.photo}
          resizeMode="cover"
          style={styles.photo}
        >
          {onClose && (
            <CustomButton handlePress={onClose} extraStyle={styles.closeBtn}>
              <CloseSvg width={27} height={27} />
            </CustomButton>
          )}

          <View style={styles.content}>
            <CustomText extraStyle={styles.title}>{item.name}</CustomText>

            <View style={styles.coordinates}>
              <LocationSvg width={25} height={25} color={COLORS.white} />
              <CustomText extraStyle={styles.coords}>
                {`${item.coordinates.latitude}, ${item.coordinates.longitude}`}
              </CustomText>
            </View>
          </View>
        </ImageBackground>
      </View>
    </Pressable>
  );
};

export default PlaceListItem;
