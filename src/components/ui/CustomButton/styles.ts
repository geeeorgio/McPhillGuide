import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';

export const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
  },
  btnPressed: {
    opacity: 0.8,
  },
  white: { backgroundColor: COLORS.white },
  prime: {
    backgroundColor: COLORS.lightOverlay,
  },
  secondary: {
    backgroundColor: COLORS.darkOverlay,
  },
});
