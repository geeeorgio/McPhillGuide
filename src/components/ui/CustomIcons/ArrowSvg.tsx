import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const ArrowSvg = (props: SvgProps) => {
  return (
    <Svg viewBox="0 0 9 14" fill="none" {...props}>
      <Path
        stroke={props.color || COLORS.white}
        strokeOpacity="0.7"
        strokeWidth="2"
        d="m.707.707 6 6-6 6"
      ></Path>
    </Svg>
  );
};

export default ArrowSvg;
