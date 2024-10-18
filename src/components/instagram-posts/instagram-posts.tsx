import { FC } from 'react';
import { TInstagramPosts } from './types.ts';
import { InstagramPostsUI } from '../ui/instagram-posts';

export const InstagramPosts: FC<TInstagramPosts> = ({ items }) => {
  return <InstagramPostsUI items={items} />;
};
