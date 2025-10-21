import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, wp } from 'src/utils/scaling';

export const styles = StyleSheet.create({
  gradientWrapper: {
    position: 'absolute',
    bottom: hp(7),
    left: wp(14),
    right: wp(14),
  },
  tabBarContent: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: hp(12),
  },
  btn: {
    padding: wp(14),
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeUnderline: {
    position: 'absolute',
    bottom: hp(5),
    width: wp(34),
    height: hp(3),
    backgroundColor: COLORS.onboardingIndicatorOn,
    borderRadius: wp(19),
  },
});
