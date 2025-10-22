import React from 'react';
import { FlatList, View } from 'react-native';

import PlaceListItem from '../PlaceListItem/PlaceListItem';

import { styles } from './styles';

import type { Place } from 'src/types';
import { hp } from 'src/utils/scaling';

interface PlacesListProps {
  places: Place[];
  onNavigate: (id: string) => void;
}

const PlacesList = ({ places, onNavigate }: PlacesListProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={places}
        renderItem={({ item }) => (
          <PlaceListItem item={item} onNavigate={onNavigate} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: hp(100) }}
      ></FlatList>
    </View>
  );
};

export default PlacesList;
