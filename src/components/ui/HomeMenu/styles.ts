import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils/scaling';

export const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  menuItemContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: hp(10),
    paddingHorizontal: wp(6),
    marginBottom: hp(8),
  },
  icon: {
    width: wp(80),
    height: hp(80),
    marginRight: wp(8),
  },
  textContent: {
    flex: 1,
    gap: hp(4),
    alignSelf: 'flex-start',
    marginRight: wp(8),
  },
  title: {
    fontSize: sp(16),
    fontFamily: FONTS.MainSemi,
  },
  desription: {
    fontSize: sp(11),
    lineHeight: hp(17.5),
  },
  arrows: {
    width: wp(40),
    justifyContent: 'flex-end',
  },
});
