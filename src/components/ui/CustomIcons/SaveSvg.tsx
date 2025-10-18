import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const SaveSvg = (props: SvgProps) => (
  <Svg viewBox="0 0 38 37" {...props}>
    <Path
      stroke={props.color || COLORS.inactiveTab}
      fill={props.color === COLORS.inactiveTab ? 'none' : props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={props.color === COLORS.inactiveTab ? '2.2' : '0'}
      d="M27.693 4.1a2.29 2.29 0 0 0-1.617-.67H7.203A3.3 3.3 0 0 0 3.9 6.733v23.123a3.303 3.303 0 0 0 3.303 3.303h23.123a3.313 3.313 0 0 0 3.303-3.303V10.984a2.29 2.29 0 0 0-.67-1.617zm-8.928 25.629a4.573 4.573 0 1 1 4.227-2.823 4.57 4.57 0 0 1-4.227 2.823m3.43-16.008H8.475a1.144 1.144 0 0 1-1.144-1.144V8.004A1.143 1.143 0 0 1 8.474 6.86h13.721a1.143 1.143 0 0 1 1.144 1.144v4.573a1.144 1.144 0 0 1-1.144 1.144"
    ></Path>
  </Svg>
);

export default SaveSvg;
