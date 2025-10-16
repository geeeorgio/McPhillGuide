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
import { COLORS, GUIDE_1, ONBOARDING_IMG, TITLE_IMG } from 'src/constants';
import { useAppDispatch } from 'src/hooks/toolkit';
import { completeOnboarding } from 'src/redux/slices/onboarding/slice';
import type { OnboardingStackNavigationProp } from 'src/types/navigation/onboarding';

const OnboardingScreen1 = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<OnboardingStackNavigationProp>();

  const handleNext = () => {
    navigation.navigate('OnboardingScreen2');
  };

  const handleSkip = () => {
    dispatch(completeOnboarding());
  };

  return (
    <CustomScreenWrapper extraStyle={styles.page2}>
      <View style={styles.header}>
        <View style={styles.empty} />
        <Image
          source={TITLE_IMG}
          style={styles.titleLogo}
          resizeMode="contain"
        />
        <TouchableOpacity
          onPress={handleSkip}
          style={styles.skipButtonContainer}
        >
          <CustomText extraStyle={styles.skipButton}>Skip</CustomText>
        </TouchableOpacity>
      </View>

      <View style={styles.mainContent2}>
        <View style={styles.topRow}>
          <CustomContainer extraStyle={styles.topRowLeft}>
            <Image
              source={GUIDE_1}
              style={styles.womanImage}
              resizeMode="contain"
            />
          </CustomContainer>

          <CustomContainer extraStyle={styles.topRowRight}>
            <Text style={styles.emojiText}>🥰</Text>
          </CustomContainer>
        </View>

        <CustomContainer extraStyle={styles.bottomRow}>
          <Image
            source={ONBOARDING_IMG}
            style={styles.centerImage}
            resizeMode="contain"
          />
        </CustomContainer>
      </View>

      <View style={styles.indicatorWrapper}>
        <OnboardingIndicator totalSteps={3} currentStep={2} />
      </View>

      <View style={styles.textContainer}>
        <CustomText extraStyle={styles.titleText}>
          Nature, history, or entertainment.
        </CustomText>
        <CustomText extraStyle={styles.subtitleText}>
          I've collected the best locations for every mood.
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
            <CustomText extraStyle={styles.buttonText}>Okey</CustomText>
          </LinearGradient>
        </CustomButton>
      </View>
    </CustomScreenWrapper>
  );
};

export default OnboardingScreen1;
