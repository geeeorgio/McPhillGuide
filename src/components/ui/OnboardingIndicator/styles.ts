import { StyleSheet } from 'react-native';
import { hp, wp } from 'src/utils/scaling';

import { COLORS } from 'src/constants';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: hp(30),
    gap: wp(6),
  },
  bar: {
    flex: 1,
    height: hp(7),
    backgroundColor: COLORS.onboardingIndicatorOff,
    borderRadius: 22,
  },
  activeBar: {
    backgroundColor: COLORS.onboardingIndicatorOn,
  },
});
