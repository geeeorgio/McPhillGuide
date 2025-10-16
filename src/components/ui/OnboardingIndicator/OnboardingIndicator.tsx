import { View } from 'react-native';

import { styles } from './styles';

interface OnboardingIndicatorProps {
  totalSteps: number;
  currentStep: number;
}

const OnboardingIndicator = ({
  totalSteps,
  currentStep,
}: OnboardingIndicatorProps) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <View
          key={index}
          style={[styles.bar, index + 1 <= currentStep && styles.activeBar]}
        />
      ))}
    </View>
  );
};

export default OnboardingIndicator;
