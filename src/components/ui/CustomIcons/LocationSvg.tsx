import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const LocationSvg = (props: SvgProps) => {
  const activeVersion = props.color === COLORS.white;

  if (activeVersion) {
    return (
      <Svg viewBox="0 0 37 37" {...props}>
        <Path
          fill={props.color}
          strokeLinecap="square"
          strokeWidth="3"
          d="M10.672 9.147a7.623 7.623 0 1 1 9.147 7.47v9.3H16.77v-9.3a7.62 7.62 0 0 1-6.098-7.47M4.734 16.77h7.463v3.05H7.463L6.277 30.49h24.036L29.127 19.82h-4.734V16.77h7.463l1.863 16.77H2.87z"
        ></Path>
      </Svg>
    );
  }

  return (
    <Svg viewBox="0 0 37 37" fill="none" {...props}>
      <Path
        stroke={props.color || COLORS.inactiveTab}
        strokeLinecap="square"
        strokeWidth="3"
        d="M18.295 15.246a6.098 6.098 0 1 0 0-12.197 6.098 6.098 0 0 0 0 12.197Zm0 0v9.147m7.623-6.098h4.574l1.524 13.721H4.574l1.524-13.721h4.574"
      ></Path>
    </Svg>
  );
};

export default LocationSvg;
