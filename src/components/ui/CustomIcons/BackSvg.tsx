import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const BackSvg = (props: SvgProps) => (
  <Svg viewBox="0 0 26 26" {...props}>
    <Path
      fill={props.color || COLORS.white}
      fillRule="evenodd"
      d="M2.832 5.878a1.625 1.625 0 0 1 1.501-1.003h10.834a8.125 8.125 0 0 1 0 16.25h-9.75a1.625 1.625 0 1 1 0-3.25h9.75a4.875 4.875 0 0 0 0-9.75H8.256l1.018 1.018a1.625 1.625 0 0 1-2.298 2.297L3.184 7.648a1.625 1.625 0 0 1-.352-1.77"
      clipRule="evenodd"
    ></Path>
  </Svg>
);

export default BackSvg;
