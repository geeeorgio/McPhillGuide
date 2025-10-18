import React from 'react';
import { ImageBackground, View } from 'react-native';
import type { EdgeInsets } from 'react-native-safe-area-context';

import CustomButton from '../CustomButton/CustomButton';
import BackSvg from '../CustomIcons/BackSvg';
import LikeSvg from '../CustomIcons/LikeSvg';
import LocationSvg from '../CustomIcons/LocationSvg';
import MapSvg from '../CustomIcons/MapSvg';
import ShareSvg from '../CustomIcons/ShareSvg';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import { COLORS } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import { selectIsFavourite } from 'src/redux/slices/places/selectors';
import { toggleFavourite } from 'src/redux/slices/places/slice';
import type { Place } from 'src/types';
import { hp } from 'src/utils/scaling';

interface PlaceDetailsProps {
  place: Place;
  onBackPress?: () => void;
  safeAreaInsets: EdgeInsets;
  handleNavigate: () => void;
  handleShare: () => void;
  showMapButton: boolean;
}

const PlaceDetails = ({
  place,
  onBackPress,
  safeAreaInsets,
  handleNavigate,
  handleShare,
  showMapButton,
}: PlaceDetailsProps) => {
  const dispatch = useAppDispatch();

  const isFavourite = useAppSelector(selectIsFavourite(place.id));

  const handleLike = (id: string) => {
    dispatch(toggleFavourite(id));
  };

  const likeColor = isFavourite ? COLORS.liked : COLORS.white;

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <ImageBackground
          source={place.photo}
          resizeMode="cover"
          style={styles.img}
        >
          <View
            style={[
              styles.navIconsWrapper,
              {
                paddingTop: safeAreaInsets.top + hp(10),
              },
            ]}
          >
            <CustomButton
              extraStyle={styles.navIcon}
              variant="secondary"
              handlePress={onBackPress}
            >
              <BackSvg width={28} height={28} color={COLORS.white} />
            </CustomButton>
            <CustomButton
              extraStyle={styles.navIcon}
              variant="secondary"
              handlePress={() => handleLike(place.id)}
            >
              <LikeSvg width={28} height={28} color={likeColor} />
            </CustomButton>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.textContainer}>
        <CustomText extraStyle={styles.title}>{place.name}</CustomText>

        <View style={styles.coordinates}>
          <LocationSvg width={26} height={26} color={COLORS.white} />
          <CustomText extraStyle={styles.coords}>
            {`${place.coordinates.latitude}, ${place.coordinates.longitude}`}
          </CustomText>
        </View>
        <CustomText extraStyle={styles.description}>
          {place.description}
        </CustomText>
      </View>

      <View style={styles.btnContainer}>
        {showMapButton && (
          <CustomButton
            extraStyle={styles.btn}
            variant="secondary"
            handlePress={handleNavigate}
          >
            <MapSvg width={38} height={38} color={COLORS.white} />
          </CustomButton>
        )}

        <CustomButton
          extraStyle={styles.btn}
          variant="secondary"
          handlePress={handleShare}
        >
          <ShareSvg width={38} height={38} color={COLORS.white} />
        </CustomButton>
      </View>
    </View>
  );
};

export default PlaceDetails;
