import type React from 'react';
import type { SvgProps } from 'react-native-svg';

import { AboutSvg, LocationSvg, MapSvg, SaveSvg } from 'src/components/ui';
import type { MainTabsStackParamsList } from 'src/types/navigation/main';

type IconComponent = React.FC<SvgProps>;

export const TAB_BAR_ICONS: Record<
  keyof MainTabsStackParamsList,
  IconComponent
> = {
  RecommendedStack: LocationSvg,
  MapStack: MapSvg,
  SavedStack: SaveSvg,
  AboutScreen: AboutSvg,
};
