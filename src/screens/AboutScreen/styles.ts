import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils/scaling';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(6),
    paddingBottom: hp(60),
  },
  contentGroup: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: hp(20),
  },
  logoWrapper: {
    width: wp(200),
    aspectRatio: 1,
    borderRadius: wp(20),
    overflow: 'hidden',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  textWrapper: {
    width: '100%',
    gap: hp(16),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: sp(21),
    lineHeight: hp(22),
    fontFamily: FONTS.MainMedium,
    textAlign: 'center',
  },
  btnWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(64),
  },
  btn: {
    width: wp(69),
    height: hp(69),
    borderWidth: wp(1.5),
    borderColor: COLORS.borderColor,
    borderRadius: wp(9),
  },
});
