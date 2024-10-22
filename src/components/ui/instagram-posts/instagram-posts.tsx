import { FC } from 'react';
import { TInstagramPosts } from './types';
import styles from './instagram-posts.module.css';
import { InstagramPost } from '../../instagram-post';
import instagramCar from '@assets/photos/instagramCar.png';

export const InstagramPostsUI: FC<TInstagramPosts> = ({ items }) => {
  return (
    <div className={styles.sectionInstagram}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.headerTitle}>Our Instagram</h3>
        <img
          src={instagramCar}
          alt='instagram photo'
          className={styles.headerPhoto}
        />
      </div>
      <div className={styles.posts}>
        {items.map((item) => (
          <InstagramPost item={item} />
        ))}
      </div>
    </div>
  );
};
