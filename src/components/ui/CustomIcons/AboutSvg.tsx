import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const AboutSvg = (props: SvgProps) => {
  const activeVersion = props.color === COLORS.white;

  if (activeVersion) {
    return (
      <Svg viewBox="0 0 37 37" {...props}>
        <Path
          fill={props.color || COLORS.inactiveTab}
          fillRule="evenodd"
          d="M19.82 13.721h-3.05v-3.049h3.05m0 15.246h-3.05V16.77h3.05M18.295 3.05a15.246 15.246 0 1 0 0 30.49 15.246 15.246 0 0 0 0-30.49"
          clipRule="evenodd"
        ></Path>
      </Svg>
    );
  }

  return (
    <Svg viewBox="0 0 37 37" {...props}>
      <Path
        fill={props.color || COLORS.inactiveTab}
        fillRule="evenodd"
        d="M18.705 3.05c-8.42 0-15.245 6.825-15.245 15.245S10.285 33.54 18.705 33.54s15.246-6.825 15.246-15.245S27.125 3.049 18.705 3.049m0 27.441c-6.725 0-12.196-5.471-12.196-12.196 0-6.726 5.471-12.197 12.196-12.197 6.726 0 12.197 5.472 12.197 12.197S25.43 30.49 18.705 30.49m1.91-18.294c0 1.105-.805 1.905-1.894 1.905-1.133 0-1.918-.8-1.918-1.927 0-1.082.806-1.884 1.918-1.884 1.088 0 1.893.802 1.893 1.906m-3.431 4.573h3.05v9.148h-3.05z"
        //  d="M19.82 13.721h-3.05v-3.049h3.05m0 15.246h-3.05V16.77h3.05M18.295 3.05a15.246 15.246 0 1 0 0 30.49 15.246 15.246 0 0 0 0-30.49"
        clipRule="evenodd"
      ></Path>
    </Svg>
  );
};

export default AboutSvg;
