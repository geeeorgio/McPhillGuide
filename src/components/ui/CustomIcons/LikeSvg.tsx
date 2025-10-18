import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const LikeSvg = (props: SvgProps) => (
  <Svg viewBox="0 0 28 28" {...props}>
    <Path
      fill={props.color || COLORS.white}
      stroke={props.color || COLORS.white}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.333"
      d="M8.75 4.667a6.417 6.417 0 0 0-6.417 6.416C2.333 17.5 9.917 23.333 14 24.69c4.083-1.357 11.667-7.19 11.667-13.607A6.417 6.417 0 0 0 14 7.393a6.41 6.41 0 0 0-5.25-2.726"
    ></Path>
  </Svg>
);

export default LikeSvg;
