import type { LocalImageSource, Place } from 'src/types';

const PlacesImg: Record<string, LocalImageSource> = {
  Assiniboine: require('../assets/images/places/AssiniboineParkZoo.png'),
  Berlin: require('../assets/images/places/BerlinZooandAquarium.png'),
  CanadianMuseum: require('../assets/images/places/CanadianMuseumforHumanRights.png'),
  ExchangeDistrict: require('../assets/images/places/ExchangeDistrictNationalHistoricSite.png'),
  FortWhyte: require('../assets/images/places/FortWhyteAlive.png'),
  Manitoba: require('../assets/images/places/ManitobaLegislativeBuilding.png'),
  StVitalPark: require('../assets/images/places/StVitalPark.png'),
  TheForks: require('../assets/images/places/TheForksNationalHistoricSite.png'),
  Thermeaby: require('../assets/images/places/ThermeabyNordikSpaNature.png'),
  Winnipeg: require('../assets/images/places/WinnipegArtGalleryQaumajuq.png'),
};

export const PLACES: Place[] = [
  {
    id: 'WPG_NAT_01',
    category: 'Nature',
    name: 'Assiniboine Park & Zoo',
    description:
      'One of Winnipeg’s largest and most beloved parks. It combines botanical gardens, scenic alleys, sculptures, and a modern zoo with a themed exhibition Journey to Churchill, where you can see polar bears, wolves, and seals. The park is ideal for walks, family vacations, and photos.',
    coordinates: {
      latitude: 49.8717,
      longitude: -97.2322,
    },
    photo: PlacesImg.Assiniboine,
  },
  {
    id: 'WPG_NAT_02',
    category: 'Nature',
    name: 'FortWhyte Alive',
    description:
      'A nature reserve within the city limits is 640 acres of lakes, forests, and meadows. Here you can watch bison, eagles, and turtles, rent a kayak, or simply enjoy the silence of nature. In winter, the park turns into a place for skiing and snowshoeing.',
    coordinates: {
      latitude: 49.8195,
      longitude: -97.2049,
    },
    photo: PlacesImg.FortWhyte,
  },
  {
    id: 'WPG_NAT_03',
    category: 'Nature',
    name: 'St. Vital Park',
    description:
      'One of Winnipeg’s oldest city parks, located along the Red River, visitors love it for its spacious lawns, well-maintained trails, perfect picnic spots, and the chance to see ducks and geese by the water.',
    coordinates: {
      latitude: 49.8146,
      longitude: -97.1307,
    },
    photo: PlacesImg.StVitalPark,
  },
  {
    id: 'WPG_HIS_01',
    category: 'History',
    name: 'The Forks National Historic Site',
    description:
      'A place where Indigenous trade routes intersected more than 6,000 years ago. Today, it’s a hub of culture and history, with museums, shops, cafes, and boardwalks. In winter, it hosts the world’s longest ice skating rink on a frozen river.',
    coordinates: {
      latitude: 49.8875,
      longitude: -97.1306,
    },
    photo: PlacesImg.TheForks,
  },
  {
    id: 'WPG_HIS_02',
    category: 'History',
    name: 'Manitoba Legislative Building',
    description:
      'Manitoba’s monumental government building, built in a neoclassical style with many symbols and secret architectural details, including the famous “Golden Boy” on the roof. Free tours reveal interesting stories about its construction and symbolism.',
    coordinates: {
      latitude: 49.884,
      longitude: -97.1473,
    },
    photo: PlacesImg.Manitoba,
  },
  {
    id: 'WPG_HIS_03',
    category: 'History',
    name: 'Exchange District National Historic Site',
    description:
      'A historic district that has preserved more than 150 buildings from the late 19th and early 20th centuries. Once the city’s financial center, it is now a creative hub with galleries, cafes, and street art.',
    coordinates: {
      latitude: 49.8998,
      longitude: -97.1383,
    },
    photo: PlacesImg.ExchangeDistrict,
  },
  {
    id: 'WPG_ENT_01',
    category: 'Entertainment',
    name: 'Thermëa by Nordik Spa-Nature',
    description:
      'A luxurious open-air spa complex known for its hot and cold pools, saunas, aromatherapy and natural surroundings. The perfect place to relax after a walk around the city.',
    coordinates: {
      latitude: 49.8293,
      longitude: -97.2368,
    },
    photo: PlacesImg.Thermeaby,
  },
  {
    id: 'WPG_ENT_02',
    category: 'Entertainment',
    name: 'Canadian Museum for Human Rights',
    description:
      'Winnipeg’s architectural gem and the world’s first museum dedicated to human rights. Interactive exhibitions, panoramic viewing platforms and the building’s symbolic design make it a must-see.',
    coordinates: {
      latitude: 49.8883,
      longitude: -97.1311,
    },
    photo: PlacesImg.CanadianMuseum,
  },
  {
    id: 'WPG_ENT_03',
    category: 'Entertainment',
    name: 'Winnipeg Art Gallery – Qaumajuq',
    description:
      'Canada’s oldest public art gallery, featuring an impressive collection of contemporary art and the world’s largest exhibition of Inuit art.',
    coordinates: {
      latitude: 49.8891,
      longitude: -97.1504,
    },
    photo: PlacesImg.Winnipeg,
  },
];

export const WINNIPEG_CENTER = {
  latitude: 49.8651,
  longitude: -97.1684,
  latitudeDelta: 0.25,
  longitudeDelta: 0.25,
};

export const MIN_LATITUDE = 49.5;
export const MAX_LATITUDE = 50.5;
export const MIN_LONGITUDE = -98.0;
export const MAX_LONGITUDE = -96.0;
export const LATITUDE_OFFSET = 0.02;
