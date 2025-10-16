import type { ReactNode } from 'react';
import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';

import { styles } from './styles';

interface CustomContainerProps {
  extraStyle?: StyleProp<ViewStyle>;
  variant?: 'dark' | 'light';
  children: ReactNode;
}

const CustomContainer = ({
  extraStyle,
  variant = 'dark',
  children,
}: CustomContainerProps) => {
  return (
    <View
      style={[
        styles.container,
        extraStyle,
        variant === 'dark' && styles.darkMode,
      ]}
    >
      {children}
    </View>
  );
};

export default CustomContainer;
