import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils/scaling';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(16),
  },
  listContainer: {
    flex: 1,
    paddingTop: hp(20),
  },
  guideContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  guide: { width: '90%' },
  text: {
    fontSize: sp(14),
    fontFamily: FONTS.MainSemi,
    lineHeight: hp(22),
    marginRight: wp(5),
  },
});
