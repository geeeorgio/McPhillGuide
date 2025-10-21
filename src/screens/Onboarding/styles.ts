import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils/scaling';

export const styles = StyleSheet.create({
  page: {
    justifyContent: 'space-between',
    paddingTop: hp(17),
    marginBottom: hp(35),
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
    fontSize: sp(15),
  },
  mainContent: {
    width: '100%',
    flex: 0.9,
    flexDirection: 'row',
    gap: wp(2),
  },
  leftImageContainer: {
    flex: 0.6,
    overflow: 'hidden',
  },
  leftImage: {
    width: '100%',
    height: '100%',
    // borderRadius: wp(22),
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
    fontSize: sp(46),
    fontFamily: FONTS.Sofia,
  },
  emojiText: {
    fontSize: sp(46),
  },
  textContainer: {
    width: '100%',
    marginBottom: hp(10),
  },
  titleText: {
    fontSize: sp(14),
    fontFamily: FONTS.MainBold,
    textAlign: 'center',
  },
  subtitleText: {
    fontSize: sp(14),
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
    flex: 1,
    flexDirection: 'column',
    gap: hp(5),
  },
  topRow: {
    flex: 1,
    flexDirection: 'row',
    gap: wp(5),
  },
  topRowLeft: {
    // paddingTop: hp(3),
    flex: 0.55,
    borderRadius: wp(19),
    overflow: 'hidden',
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
    borderRadius: wp(16),
    overflow: 'hidden',
  },
  centerImage: {
    width: '100%',
    height: '100%',
    borderRadius: 22,
  },

  // ============ onboarding2 =========== //
  mainContent3: {
    flex: 0.8,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: wp(4),
  },
  leftColumn3: {
    flex: 0.4,
    width: '40%',
    justifyContent: 'center',
    gap: hp(5),
    paddingVertical: hp(16),
  },
  readyBox: {
    flex: 1,
    width: '100%',
    aspectRatio: 1,
    borderRadius: wp(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  readyText: {
    textAlign: 'center',
    fontSize: sp(36),
    fontFamily: FONTS.Sofia,
  },
  circleTextBox: {
    flex: 1,
    width: '100%',
    aspectRatio: 1,
    borderRadius: wp(15),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  letsGoWrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  animated: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    width: '90%',
    height: '90%',
    borderRadius: wp(15),
    alignSelf: 'center',
  },
  rightColumn3: {
    flex: 0.55,
    width: '55%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  womanImage3: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    // aspectRatio: 0.75,
    borderRadius: wp(19),
  },
});
