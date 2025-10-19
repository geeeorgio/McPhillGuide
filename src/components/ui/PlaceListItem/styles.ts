import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils/scaling';

export const styles = StyleSheet.create({
  wrapper: {
    borderWidth: wp(2),
    borderColor: COLORS.borderColor,
    width: '100%',
    height: hp(333),
    borderRadius: wp(48),
    overflow: 'hidden',
    marginBottom: hp(10),
  },
  photo: { ...StyleSheet.absoluteFillObject, justifyContent: 'flex-end' },
  content: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: wp(10),
    paddingBottom: hp(30),
    backgroundColor: COLORS.textShadowColor,
  },
  title: {
    fontSize: sp(24),
    fontFamily: FONTS.MainSemi,
  },
  coordinates: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(6),
  },
  coords: {
    fontSize: sp(15),
    lineHeight: hp(21),
  },
  closeBtn: {
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    position: 'absolute',
    top: hp(20),
    right: wp(20),
    borderRadius: wp(8),
    width: wp(40),
    height: hp(40),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
});
