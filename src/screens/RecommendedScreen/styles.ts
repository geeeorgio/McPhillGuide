import { StyleSheet } from 'react-native';

import { hp, wp } from 'src/utils/scaling';

export const styles = StyleSheet.create({
  main: { paddingHorizontal: wp(20) },
  guideWrapper: {
    alignSelf: 'center',
    width: '85%',
    marginVertical: hp(14),
  },
});
