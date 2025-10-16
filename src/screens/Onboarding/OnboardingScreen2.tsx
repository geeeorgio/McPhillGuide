import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Image, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomScreenWrapper,
  CustomText,
  OnboardingIndicator,
} from 'src/components/ui';
import { COLORS, GUIDE_DARK, LETS_GO_IMG, TITLE_IMG } from 'src/constants';
import { useAppDispatch } from 'src/hooks/toolkit';
import { completeOnboarding } from 'src/redux/slices/onboarding/slice';

const OnboardingScreen2 = () => {
  const dispatch = useAppDispatch();

  const handleNext = () => {
    dispatch(completeOnboarding());
  };

  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 10000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [rotateAnim]);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <CustomScreenWrapper extraStyle={styles.page}>
      <View style={styles.header}>
        <View style={styles.empty} />
        <Image
          source={TITLE_IMG}
          style={styles.titleLogo}
          resizeMode="contain"
        />
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
            <Animated.View
              style={[
                {
                  width: '100%',
                  height: '100%',
                  transform: [{ rotate: rotate }],
                },
              ]}
            >
              <Image
                source={LETS_GO_IMG}
                style={styles.circleText}
                resizeMode="cover"
              />
            </Animated.View>
          </CustomContainer>
        </View>

        <CustomContainer extraStyle={styles.rightColumn3}>
          <Image
            source={GUIDE_DARK}
            style={styles.womanImage3}
            resizeMode="contain"
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
