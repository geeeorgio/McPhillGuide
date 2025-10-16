import { StyleSheet } from 'react-native';
import { hp, sp, wp } from 'src/utils/scaling';

import { FONTS } from 'src/constants';

export const styles = StyleSheet.create({
  page: {
    justifyContent: 'space-between',
    paddingTop: hp(17),
    marginBottom: hp(35),
    paddingHorizontal: wp(6),
  },
  header: {
    width: '100%',
    height: hp(52),
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: hp(15),
  },
  empty: {
    flex: 0.2,
    height: '100%',
  },
  titleLogo: {
    flex: 0.6,
    height: '100%',
    alignSelf: 'center',
  },
  skipButtonContainer: {
    height: '100%',
    flex: 0.2,
    alignItems: 'flex-end',
  },
  skipButton: {
    fontSize: sp(16),
  },
  mainContent: {
    width: '100%',
    flex: 0.8,
    flexDirection: 'row',
    gap: wp(2),
  },
  leftImageContainer: {
    flex: 0.6,
    paddingTop: hp(5),
  },
  leftImage: {
    width: '100%',
    height: '100%',
    borderRadius: 22,
  },
  rightColumn: {
    flex: 0.4,
    flexDirection: 'column',
    gap: hp(5),
    justifyContent: 'space-between',
    paddingVertical: hp(20),
  },
  topRightBox: {
    flex: 1,
    borderRadius: 15,
  },
  bottomRightBox: {
    flex: 1,
    borderRadius: 15,
  },
  indicatorWrapper: { width: '100%', paddingHorizontal: wp(30) },
  helloText: {
    fontSize: sp(48),
    fontFamily: FONTS.Sofia,
  },
  emojiText: {
    fontSize: sp(48),
  },
  textContainer: {
    width: '100%',
    marginBottom: hp(10),
  },
  titleText: {
    fontSize: sp(19),
    fontFamily: FONTS.MainBold,
    textAlign: 'center',
  },
  subtitleText: {
    fontSize: sp(16),
    fontFamily: FONTS.Main,
    textAlign: 'center',
  },
  gradientButton: {
    width: '100%',
    paddingVertical: hp(15),
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: sp(24),
    fontFamily: FONTS.MainBold,
  },

  // ============ onboarding1 =========== //
  page2: {
    justifyContent: 'space-between',
    paddingTop: hp(17),
    marginBottom: hp(35),
    paddingHorizontal: wp(14),
  },
  mainContent2: {
    width: '100%',
    flex: 0.9,
    flexDirection: 'column',
    gap: hp(5),
  },
  topRow: {
    flex: 1,
    flexDirection: 'row',
    gap: wp(5),
  },
  topRowLeft: {
    paddingTop: hp(3),
    flex: 0.55,
    borderRadius: 19,
  },
  topRowRight: {
    alignSelf: 'flex-end',
    height: '75%',
    flex: 0.45,
    borderRadius: 15,
  },
  bottomRow: {
    flex: 1,
    padding: 0,
  },
  womanImage: {
    width: '100%',
    height: '100%',
    borderRadius: 19,
    overflow: 'hidden',
  },
  centerImage: {
    width: '100%',
    height: '100%',
    borderRadius: 22,
  },

  // ============ onboarding2 =========== //
  mainContent3: {
    width: '100%',
    flex: 0.8,
    flexDirection: 'row',
    gap: wp(2),
    alignItems: 'center',
  },
  leftColumn3: {
    width: '100%',
    flex: 0.4,
    flexDirection: 'column',
    gap: hp(6),
    justifyContent: 'space-between',
    paddingVertical: hp(20),
  },
  readyBox: {
    flex: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  readyText: {
    textAlign: 'center',
    fontSize: sp(34),
    fontFamily: FONTS.Sofia,
  },
  circleTextBox: {
    borderWidth: 1,
    borderColor: 'red',
    flex: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    overflow: 'hidden',
  },
  circleText: {
    borderRadius: 15,
    width: '100%',
    height: '100%',
  },
  rightColumn3: {
    width: '100%',
    flex: 0.6,
    paddingTop: hp(5),
  },
  womanImage3: {
    width: '100%',
    height: '100%',
    borderRadius: 22,
  },
});
