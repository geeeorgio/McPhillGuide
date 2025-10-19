import { StyleSheet } from 'react-native';

import { wp } from 'src/utils/scaling';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  selectedPlaceWrapper: {
    position: 'absolute',
    left: wp(15),
    right: wp(15),
    zIndex: 10,
  },
});
