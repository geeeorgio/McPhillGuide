import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils/scaling';

export const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageWrapper: {
    width: '100%',
    height: hp(360),
    borderBottomWidth: wp(3),
    borderLeftWidth: wp(1),
    borderRightWidth: wp(1),
    borderBottomLeftRadius: wp(33),
    borderBottomRightRadius: wp(33),
    borderColor: COLORS.borderColor,
    overflow: 'hidden',
  },
  img: { width: '100%', height: '100%' },
  navIconsWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(9),
  },
  navIcon: {
    width: wp(52),
    height: hp(52),
    borderRadius: wp(7),
    borderWidth: wp(1),
  },
  textContainer: {
    width: '100%',
    paddingHorizontal: wp(9),
    justifyContent: 'space-between',
    gap: hp(15),
  },
  title: {
    fontSize: sp(23),
    fontFamily: FONTS.MainSemi,
  },
  coordinates: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(8),
  },
  coords: {
    fontSize: sp(16),
    lineHeight: hp(20),
  },
  description: {
    fontFamily: FONTS.InterRegular,
    fontSize: sp(18),
    lineHeight: hp(28),
  },
  btnContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: hp(40),
  },
  btn: {
    height: hp(66),
    width: wp(66),
    borderWidth: wp(1.5),
    borderRadius: wp(9),
  },
});
