import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils/scaling';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(6),
    minHeight: hp(70),
    marginVertical: hp(16),
  },
  backButton: {
    width: wp(66),
    height: hp(66),
    padding: 0,
    borderRadius: wp(15),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: COLORS.borderColor,
    marginRight: wp(8),
  },
  menuItemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(8),
    paddingHorizontal: wp(6),
    borderRadius: wp(18),
    borderWidth: wp(1.5),
  },
  icon: {
    width: wp(60),
    height: hp(60),
    marginRight: wp(4),
  },
  textContent: {
    flex: 1,
    gap: hp(8),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: sp(15),
    fontFamily: FONTS.MainSemi,
  },
  desription: {
    textAlign: 'center',
    fontSize: sp(10),
    lineHeight: hp(15),
  },
});
