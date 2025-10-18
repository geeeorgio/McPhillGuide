import { Share } from 'react-native';

import type { Place } from 'src/types';

interface ShareOptions {
  title: string;
  message: string;
  url: string;
}

export const sharePlace = async (
  place?: Place,
  appUrl?: string,
): Promise<void> => {
  const DEFAULT_APP_STORE_URL = '';

  const DEFAULT_TITLE = 'Check out this awesome app!';

  const DEFAULT_MESSAGE =
    `Discover the best places with this guide!\n\n` +
    `Save your favorites and plan your trip with the interactive map.`;

  let shareData: ShareOptions;

  if (place) {
    shareData = {
      title: `Discover: ${place.name}`,

      message:
        `Hey, check out this awesome place I found! 🤩\n\n` +
        `📍 ${place.name}\n` +
        `Coordinates: ${place.coordinates.latitude}, ${place.coordinates.longitude}\n\n` +
        `Download the app to see more great places! \n${appUrl || DEFAULT_APP_STORE_URL}`,

      url: appUrl ? `${appUrl}/${place.id}` : DEFAULT_APP_STORE_URL,
    };
  } else {
    shareData = {
      title: DEFAULT_TITLE,
      message: DEFAULT_MESSAGE,
      url: appUrl || DEFAULT_APP_STORE_URL,
    };
  }

  try {
    const result = await Share.share({
      message: shareData.message,
      title: shareData.title,
      url: shareData.url,
    });

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        console.log('Shared with', result.activityType);
      } else {
        console.log('Shared!');
      }
    } else if (result.action === Share.dismissedAction) {
      console.log('Closed share window');
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Share Error:', error.message);
    } else {
      console.error('Unknown Share Error:', error);
    }
  }
};
