export type LocalImageSource = number;
export type PlacesCategory = 'Nature' | 'History' | 'Entertainment';

interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Place {
  id: string;
  category: PlacesCategory;
  name: string;
  description: string;
  coordinates: Coordinates;
  photo: number;
}
