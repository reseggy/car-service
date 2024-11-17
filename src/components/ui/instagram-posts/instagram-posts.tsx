import { FC, memo } from 'react';
import { TInstagramPosts } from './types';
import styles from './instagram-posts.module.css';
import { InstagramPost } from '../../instagram-post';
import instagramCar from '@assets/photos/instagramCar.png';

export const InstagramPostsUI: FC<TInstagramPosts> = memo(({ items }) => {
  return (
    <div className={styles.sectionInstagram}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.headerTitle}>Our Instagram</h3>
        <img
          src={instagramCar}
          alt='instagram photo'
          className={styles.headerPhoto}
          loading='lazy'
        />
      </div>
      <div className={styles.posts}>
        {items.map((item, index) => (
          <InstagramPost key={index} item={item} />
        ))}
      </div>
    </div>
  );
});
