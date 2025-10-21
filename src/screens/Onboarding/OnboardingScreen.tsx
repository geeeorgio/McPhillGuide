import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomScreenWrapper,
  CustomText,
  OnboardingIndicator,
} from 'src/components/ui';
import { COLORS, GUIDE_5, LOGO_IMG, TITLE_IMG } from 'src/constants';
import { useAppDispatch } from 'src/hooks/toolkit';
import { completeOnboarding } from 'src/redux/slices/onboarding/slice';
import type { OnboardingStackNavigationProp } from 'src/types/navigation/onboarding';

const OnboardingScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<OnboardingStackNavigationProp>();

  const handleNext = () => {
    navigation.navigate('OnboardingScreen1');
  };

  const handleSkip = () => {
    dispatch(completeOnboarding());
  };

  return (
    <CustomScreenWrapper extraStyle={styles.page}>
      <View style={styles.header}>
        <View style={styles.empty} />

        <View style={styles.titleLogo} />

        {/*
        <Image
          source={TITLE_IMG}
          style={styles.titleLogo}
          resizeMode="contain"
        /> */}

        <TouchableOpacity
          onPress={handleSkip}
          style={styles.skipButtonContainer}
        >
          <CustomText extraStyle={styles.skipButton}>Skip</CustomText>
        </TouchableOpacity>
      </View>

      <View style={styles.mainContent}>
        <CustomContainer extraStyle={styles.leftImageContainer}>
          <Image
            source={LOGO_IMG}
            style={styles.leftImage}
            resizeMode="cover"
          />
        </CustomContainer>

        <View style={styles.rightColumn}>
          <CustomContainer extraStyle={styles.topRightBox}>
            <CustomText extraStyle={styles.helloText}>Hello!</CustomText>
          </CustomContainer>
          <CustomContainer extraStyle={styles.bottomRightBox}>
            <Text style={styles.emojiText}>🤗</Text>
          </CustomContainer>
        </View>
      </View>

      <View style={styles.indicatorWrapper}>
        <OnboardingIndicator totalSteps={3} currentStep={1} />
      </View>

      <View style={styles.textContainer}>
        <CustomText extraStyle={styles.titleText}>
          I'm Leprechaun, your guide to Winnipeg.
        </CustomText>
        <CustomText extraStyle={styles.subtitleText}>
          I'll show you the most interesting places where history, culture, and
          nature merge together.
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
            <CustomText extraStyle={styles.buttonText}>Next</CustomText>
          </LinearGradient>
        </CustomButton>
      </View>
    </CustomScreenWrapper>
  );
};

export default OnboardingScreen;
