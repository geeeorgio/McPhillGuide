import type { ReactNode } from 'react';
import React from 'react';
import { ImageBackground, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

import { MAIN_BACKGROUND } from 'src/constants';
import { useAppSelector } from 'src/hooks/toolkit';
import { selectIsSafeArea } from 'src/redux/slices/mode/selectors';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const isSafeArea = useAppSelector(selectIsSafeArea);

  const Container = isSafeArea ? SafeAreaView : View;

  return (
    <ImageBackground
      source={MAIN_BACKGROUND}
      resizeMode="cover"
      style={styles.image}
    >
      <Container style={styles.container}>{children}</Container>
    </ImageBackground>
  );
};

export default Layout;
