import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { wp } from 'src/utils/scaling';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightOverlay,
    borderRadius: wp(22),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.borderColor,
    borderWidth: wp(3),
  },
  darkMode: {
    backgroundColor: COLORS.darkOverlay,
  },
});
