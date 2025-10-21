import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils/scaling';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp(6),
    gap: wp(4),
    minHeight: hp(99),
  },
  logoButton: {
    width: wp(99),
    // height: hp(96),
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: COLORS.borderColor,
    overflow: 'hidden',
  },
  logo: {
    borderRadius: 16,
    width: '100%',
    height: '100%',
  },
  titleWrapper: {
    flex: 1,
    alignSelf: 'stretch',
  },
  text: {
    color: COLORS.white,
    fontSize: sp(18),
    fontFamily: FONTS.MainSemi,
  },
});
