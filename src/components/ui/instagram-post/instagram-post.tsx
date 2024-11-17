import { FC, memo } from 'react';
import { TInstagramPostProps } from './types';
import styles from './instagram-post.module.css';
import instagramAvatar from '@assets/photos/instagramAvatar.png';
import iconMore from '@assets/svg/iconMore.svg';
import iconLike from '@assets/svg/iconLike.svg';
import iconComment from '@assets/svg/iconComment.svg';
import iconShare from '@assets/svg/iconShare.svg';
import iconMarker from '@assets/svg/iconMarker.svg';
import storyRing from '@assets/svg/storyRing.svg';

export const InstagramPostUI: FC<TInstagramPostProps> = memo(({ item }) => {
  return (
    <div className={styles.post}>
      <div className={styles.postHeader}>
        <div className={styles.headerUser}>
          <div className={styles.avatar}>
            <img
              src={storyRing}
              alt='story ring'
              className={styles.storyRing}
            />
            <img
              src={instagramAvatar}
              alt='avatar'
              className={styles.headerPhoto}
            />
          </div>

          <div className={styles.headerInfo}>
            <p className={styles.headerUsername}>33AutoPulse</p>
            <p className={styles.headerText}>Sponsored</p>
          </div>
        </div>

        <img src={iconMore} alt='icon more' className={styles.headerIcon} />
      </div>

      <img
        src={item.imgSrc}
        alt='instagram photo'
        className={styles.mainPhoto}
        loading='lazy'
      />

      <div className={styles.icons}>
        <div className={styles.iconsGroup}>
          <img src={iconLike} alt='icon like' className={styles.icon} />
          <img src={iconComment} alt='icon comment' className={styles.icon} />
          <img src={iconShare} alt='icon share' className={styles.icon} />
        </div>

        <img src={iconMarker} alt='icon marker' className={styles.icon} />
      </div>

      <div className={styles.postFooter}>
        <p className={styles.footerLikes}>{item.likes} Likes</p>
        <p className={styles.footerText}>
          <span className={styles.footerUsername}>33AutoPulse</span> {item.text}
        </p>
      </div>
    </div>
  );
});
