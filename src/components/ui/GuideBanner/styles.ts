import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils/scaling';

export const styles = StyleSheet.create({
  guideBanner: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: wp(17),
    overflow: 'hidden',
  },
  imageWrapper: {
    position: 'relative',
    width: wp(111),
    height: hp(111),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  img: {
    // position: 'absolute',
    // left: wp(-10),
    width: '100%',
    height: '100%',
    borderTopRightRadius: wp(17),
    borderBottomRightRadius: wp(17),
  },
  text: {
    flex: 1,
    fontSize: sp(11),
    fontFamily: FONTS.MainSemi,
    textAlign: 'center',
  },
});
