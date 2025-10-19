import type { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import { Image, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import CustomButton from '../CustomButton/CustomButton';
import CustomContainer from '../CustomContainer/CustomContainer';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import { LOGO_IMG } from 'src/constants';

const CustomTabBarHeader = ({
  navigation,
  route,
  options,
}: BottomTabHeaderProps) => {
  const insets = useSafeAreaInsets();
  const title = (options.title || route.name) as string;

  const isTransparent = options.headerTransparent;

  const handleLogoPress = () => {
    navigation.navigate('RecommendedStack', {
      screen: 'RecomendedScreen',
      params: undefined,
    });
  };

  return (
    <View
      style={[styles.container, isTransparent && { paddingTop: insets.top }]}
    >
      <CustomButton
        handlePress={handleLogoPress}
        extraStyle={styles.logoButton}
        variant="default"
      >
        <Image source={LOGO_IMG} style={styles.logo} />
      </CustomButton>

      <CustomContainer extraStyle={styles.titleWrapper}>
        <CustomText extraStyle={styles.text}>{title}</CustomText>
      </CustomContainer>
    </View>
  );
};

export default CustomTabBarHeader;
