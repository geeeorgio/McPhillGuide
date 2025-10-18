import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const ShareSvg = (props: SvgProps) => (
  <Svg viewBox="0 0 36 36" {...props}>
    <Path
      fill={props.fill || COLORS.white}
      d="M25.5 33q-1.875 0-3.187-1.312Q21 30.375 21 28.5q0-.225.113-1.05L10.575 21.3A4.46 4.46 0 0 1 7.5 22.5q-1.875 0-3.187-1.312Q3 19.875 3 18t1.313-3.187T7.5 13.5q.9 0 1.688.32t1.387.88l10.538-6.15a2.5 2.5 0 0 1-.093-.506A8 8 0 0 1 21 7.5q0-1.875 1.313-3.187Q23.625 3 25.5 3t3.188 1.313T30 7.5t-1.312 3.188T25.5 12q-.9 0-1.687-.32a4.5 4.5 0 0 1-1.388-.88l-10.538 6.15q.075.262.095.507T12 18t-.018.544a2.3 2.3 0 0 1-.095.506l10.538 6.15q.6-.562 1.387-.88A4.5 4.5 0 0 1 25.5 24q1.875 0 3.188 1.313Q30 26.625 30 28.5t-1.312 3.188T25.5 33"
    ></Path>
  </Svg>
);

export default ShareSvg;
