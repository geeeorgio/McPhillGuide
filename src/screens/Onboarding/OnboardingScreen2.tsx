import React, { useEffect } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomScreenWrapper,
  CustomText,
  OnboardingIndicator,
} from 'src/components/ui';
import {
  COLORS,
  GUIDE_DARK,
  LETS_GO_IMG,
  LOGO_IMG,
  TITLE_IMG,
} from 'src/constants';
import { useAppDispatch } from 'src/hooks/toolkit';
import { completeOnboarding } from 'src/redux/slices/onboarding/slice';

const OnboardingScreen2 = () => {
  const dispatch = useAppDispatch();

  const handleNext = () => {
    dispatch(completeOnboarding());
  };

  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, { duration: 11000, easing: Easing.linear }),
      -1,
    );
  }, [rotation]);

  const rotateStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  return (
    <CustomScreenWrapper extraStyle={styles.page}>
      <View style={styles.header}>
        <View style={styles.empty} />

        <View style={styles.titleLogo} />

        {/* <Image
          source={TITLE_IMG}
          style={styles.titleLogo}
          resizeMode="contain"
        /> */}

        <TouchableOpacity
          onPress={handleNext}
          style={styles.skipButtonContainer}
        >
          <CustomText extraStyle={styles.skipButton}>Skip</CustomText>
        </TouchableOpacity>
      </View>

      <View style={styles.mainContent3}>
        <View style={styles.leftColumn3}>
          <CustomContainer extraStyle={styles.readyBox}>
            <CustomText extraStyle={styles.readyText}>Ready?</CustomText>
          </CustomContainer>

          <CustomContainer extraStyle={styles.circleTextBox}>
            <View style={styles.letsGoWrapper}>
              <Animated.View style={[styles.animated, rotateStyle]}>
                <Image
                  source={LETS_GO_IMG}
                  style={styles.circleText}
                  resizeMode="contain"
                />
              </Animated.View>
            </View>
          </CustomContainer>
        </View>

        <CustomContainer extraStyle={styles.rightColumn3}>
          <Image
            source={LOGO_IMG}
            style={styles.womanImage3}
            resizeMode="cover"
          />
        </CustomContainer>
      </View>

      <View style={styles.indicatorWrapper}>
        <OnboardingIndicator totalSteps={3} currentStep={3} />
      </View>

      <View style={styles.textContainer}>
        <CustomText extraStyle={styles.titleText}>
          Add your favorite locations.
        </CustomText>
        <CustomText extraStyle={styles.subtitleText}>
          Discover them on an interactive map — and go on an adventure with me!
        </CustomText>
      </View>

      <View style={styles.indicatorWrapper}>
        <CustomButton handlePress={handleNext}>
          <LinearGradient
            colors={COLORS.gradient}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.gradientButton}
          >
            <CustomText extraStyle={styles.buttonText}>Start</CustomText>
          </LinearGradient>
        </CustomButton>
      </View>
    </CustomScreenWrapper>
  );
};

export default OnboardingScreen2;
