import { FC } from 'react';
import { TInstagramPostProps } from './types';
import { InstagramPostUI } from '../ui/instagram-post';

export const InstagramPost: FC<TInstagramPostProps> = ({ item }) => {
  return <InstagramPostUI item={item} />;
};
