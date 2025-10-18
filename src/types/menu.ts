import type { PlacesCategory } from './places';

export type MenuImageMap = Record<PlacesCategory, number>;

export type MenuItemData = {
  description: string;
  image: number;
};

export type MenuMap = Record<PlacesCategory, MenuItemData>;
