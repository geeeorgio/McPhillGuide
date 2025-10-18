import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const MapSvg = (props: SvgProps) => {
  const activeVersion = props.color === COLORS.white;

  if (activeVersion) {
    return (
      <Svg viewBox="0 0 38 37" {...props}>
        <Path
          fill={props.color || COLORS.inactiveTab}
          d="m21.878 31.673-8.157-2.858-7.09 2.744a1.4 1.4 0 0 1-.743.096 1.7 1.7 0 0 1-.666-.249q-.304-.192-.476-.513a1.55 1.55 0 0 1-.172-.744V8.766q0-.495.286-.876.287-.381.78-.572l7.09-2.401q.23-.077.477-.115a3.4 3.4 0 0 1 1.03 0q.25.039.475.115l8.157 2.858 7.089-2.744q.381-.153.744-.094.363.057.666.247.304.188.478.515.173.326.17.742v21.383q0 .495-.285.876t-.782.572l-7.09 2.401a3 3 0 0 1-.475.115 3.4 3.4 0 0 1-.515.038q-.269 0-.514-.038a3 3 0 0 1-.477-.115m-.534-3.392V10.443L15.246 8.31v17.838z"
        ></Path>
      </Svg>
    );
  }

  return (
    <Svg viewBox="0 0 38 37" {...props}>
      <Path
        fill={props.color || COLORS.inactiveTab}
        d="m23.809 32.016-9.148-3.202-9.147 3.545V7.699l9.147-3.125 9.148 3.201 9.147-3.544v24.66zm-1.525-3.735V10.443L16.186 8.31v17.837zm3.05 0 4.573-1.525V8.69l-4.574 1.753zM8.563 27.9l4.573-1.754V8.31L8.563 9.833z"
      ></Path>
    </Svg>
  );
};

export default MapSvg;
