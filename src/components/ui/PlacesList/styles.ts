import { StyleSheet } from 'react-native';

import { hp } from 'src/utils/scaling';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: hp(100),
  },
});
