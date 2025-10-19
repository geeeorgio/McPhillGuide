import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import CustomContainer from '../CustomContainer/CustomContainer';

import { styles } from './styles';

import { COLORS } from 'src/constants';
import { TAB_BAR_ICONS } from 'src/constants/tabBarIcons';
import { hp } from 'src/utils/scaling';

const CustomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const insets = useSafeAreaInsets();
  const routeIndex = state.routes[state.index];
  const { options } = descriptors[routeIndex.key];

  const isMapScreen = options.headerTransparent;

  return (
    <CustomContainer
      extraStyle={[
        styles.gradientWrapper,
        isMapScreen && { bottom: insets.bottom + hp(7) },
      ]}
      variant="dark"
    >
      <View style={styles.tabBarContent}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          const IconComponent =
            TAB_BAR_ICONS[route.name as keyof typeof TAB_BAR_ICONS];

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <Pressable
              key={route.key}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.btn}
              accessibilityRole="button"
              accessibilityState={{ selected: isFocused }}
              accessibilityLabel={options.tabBarAccessibilityLabel}
            >
              {IconComponent && (
                <IconComponent
                  width={37}
                  height={37}
                  color={isFocused ? COLORS.white : COLORS.inactiveTab}
                />
              )}
              {isFocused && <View style={styles.activeUnderline} />}
            </Pressable>
          );
        })}
      </View>
    </CustomContainer>
  );
};

export default CustomTabBar;
