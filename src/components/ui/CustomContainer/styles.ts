import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightOverlay,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.borderColor,
    borderWidth: 3,
  },
  darkMode: {
    backgroundColor: COLORS.darkOverlay,
  },
});
