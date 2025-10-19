import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const CloseSvg = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 27 27" {...props}>
    <Path
      fill={props.color || COLORS.white}
      fillRule="evenodd"
      d="m13.226 15.565 5.845 5.845a1.654 1.654 0 0 0 2.339-2.339l-5.847-5.845 5.846-5.844a1.653 1.653 0 1 0-2.34-2.338l-5.843 5.845-5.845-5.845A1.653 1.653 0 1 0 5.042 7.38l5.848 5.846-5.846 5.846a1.652 1.652 0 0 0 1.164 2.842 1.65 1.65 0 0 0 1.174-.505z"
      clipRule="evenodd"
    ></Path>
  </Svg>
);

export default CloseSvg;
