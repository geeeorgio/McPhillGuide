import { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import LocationSvg from '../CustomIcons/LocationSvg';

import { styles } from './styles';

import {
  COLORS,
  LATITUDE_OFFSET,
  MAX_LATITUDE,
  MAX_LONGITUDE,
  MIN_LATITUDE,
  MIN_LONGITUDE,
  WINNIPEG_CENTER,
} from 'src/constants';
import darkMapStyle from 'src/constants/darkMapStyle.json';
import { useAppDispatch } from 'src/hooks/toolkit';
import { setSelectedPlace } from 'src/redux/slices/places/slice';
import type { Place } from 'src/types';

interface MapCardProps {
  place?: Place | undefined;
  placesList?: Place[] | undefined;
}

const MapCard = ({ place, placesList }: MapCardProps) => {
  const dispatch = useAppDispatch();
  const mapRef = useRef<MapView>(null);
  const [isMapReady, setIsMapReady] = useState(false);

  const onDetailPress = (card: Place) => {
    dispatch(setSelectedPlace(card));
  };

  useEffect(() => {
    if (!isMapReady || !mapRef.current) {
      return;
    }

    const timer = setTimeout(() => {
      const map = mapRef.current;
      if (!map) return;

      if (place) {
        if (
          place.coordinates.latitude < MIN_LATITUDE ||
          place.coordinates.latitude > MAX_LATITUDE
        ) {
          map.animateToRegion(WINNIPEG_CENTER, 500);
          return;
        }

        const centeredLatitude = place.coordinates.latitude - LATITUDE_OFFSET;

        map.animateToRegion(
          {
            latitude: centeredLatitude,
            longitude: place.coordinates.longitude,
            latitudeDelta: 0.06,
            longitudeDelta: 0.06,
          },
          500,
        );
      } else if (!place && placesList?.length) {
        const validCoordinates = placesList
          .filter(
            (p) =>
              p.coordinates.latitude >= MIN_LATITUDE &&
              p.coordinates.latitude <= MAX_LATITUDE &&
              p.coordinates.longitude >= MIN_LONGITUDE &&
              p.coordinates.longitude <= MAX_LONGITUDE,
          )
          .map((item) => item.coordinates);

        if (validCoordinates.length > 0) {
          map.fitToCoordinates(validCoordinates, {
            edgePadding: { top: 100, right: 70, bottom: 100, left: 70 },
            animated: true,
          });
        } else {
          map.animateToRegion(WINNIPEG_CENTER, 500);
        }
      } else {
        map.animateToRegion(WINNIPEG_CENTER, 500);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [isMapReady, place, placesList]);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        customMapStyle={darkMapStyle}
        onMapReady={() => setIsMapReady(true)}
      >
        {place ? (
          <Marker
            key={place.id}
            coordinate={place.coordinates}
            onPress={() => onDetailPress(place)}
          >
            <LocationSvg width={55} height={55} color={COLORS.white} />
          </Marker>
        ) : (
          placesList?.map((item) => (
            <Marker
              key={item.id}
              coordinate={item.coordinates}
              onPress={() => onDetailPress(item)}
            >
              <LocationSvg width={55} height={55} color={COLORS.white} />
            </Marker>
          ))
        )}
      </MapView>
    </View>
  );
};

export default MapCard;
