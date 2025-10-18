import { MENU_IMG } from './images';

import type { MenuMap } from 'src/types';

export const MENU: MenuMap = {
  Nature: {
    description: 'Parks, rivers, peace and inspiration among the greenery.',
    image: MENU_IMG.Nature,
  },
  History: {
    description: "Places that tell the story of Winnipeg's past.",
    image: MENU_IMG.History,
  },
  Entertainment: {
    description: 'Festivals, art and vivid impressions.',
    image: MENU_IMG.Entertainment,
  },
};
