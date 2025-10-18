import React, { useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import ArrowSvg from './ArrowSvg';

import { COLORS } from 'src/constants';
import { hp, wp } from 'src/utils/scaling';

const AnimatedArrows = () => {
  const opacity1 = useSharedValue(0);
  const opacity2 = useSharedValue(0);
  const opacity3 = useSharedValue(0);

  const fadeDuration = 700;
  const stepDelay = 350;
  const totalCycleTime = fadeDuration * 2 + stepDelay * 2 + 350;

  const singleArrowCycle = (initialDelay) => {
    'worklet';
    const appear = withTiming(1, {
      duration: fadeDuration,
      easing: Easing.linear,
    });
    const vanish = withTiming(0, {
      duration: fadeDuration,
      easing: Easing.linear,
    });

    const waitTime = totalCycleTime - initialDelay - fadeDuration * 2;

    return withSequence(
      withDelay(initialDelay, appear),
      vanish,
      withTiming(0, { duration: waitTime }),
    );
  };

  const createWaveEffect = (sharedValue, initialDelay) => {
    'worklet';
    return withRepeat(singleArrowCycle(initialDelay), -1, false);
  };

  useEffect(() => {
    opacity1.value = createWaveEffect(opacity1, 0);

    opacity2.value = createWaveEffect(opacity2, stepDelay);

    opacity3.value = createWaveEffect(opacity3, stepDelay * 2);
  }, []);

  const style1 = useAnimatedStyle(() => ({ opacity: opacity1.value }));
  const style2 = useAnimatedStyle(() => ({ opacity: opacity2.value }));
  const style3 = useAnimatedStyle(() => ({ opacity: opacity3.value }));

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: wp(4),
      }}
    >
      <Animated.View style={style1}>
        <ArrowSvg width={wp(7)} height={hp(11)} stroke={COLORS.arrowOne} />
      </Animated.View>
      <Animated.View style={style2}>
        <ArrowSvg width={wp(9)} height={hp(14)} stroke={COLORS.arrowTwo} />
      </Animated.View>
      <Animated.View style={style3}>
        <ArrowSvg width={wp(12)} height={hp(19)} />
      </Animated.View>
    </View>
  );
};

export default AnimatedArrows;
