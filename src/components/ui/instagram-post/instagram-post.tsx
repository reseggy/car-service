import { FC } from 'react';
import { TInstagramPostProps } from './types';
import styles from './instagram-post.module.css';
import instagramAvatar from '../../../assets/instagramAvatar.png';
import iconMore from '../../../assets/iconMore.svg';
import iconLike from '../../../assets/iconLike.svg';
import iconComment from '../../../assets/iconComment.svg';
import iconShare from '../../../assets/iconShare.svg';
import iconMarker from '../../../assets/iconMarker.svg';
import storyRing from '../../../assets/storyRing.svg';

export const InstagramPostUI: FC<TInstagramPostProps> = ({ item }) => {
  //TODO Сделать кнопкой, добавить hover и переправку в запретграмм
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
      />

      <div className={styles.icons}>
        <div className={styles.iconsGroup}>
          <img src={iconLike} alt='icon like' className={styles.iconLike} />
          <img
            src={iconComment}
            alt='icon comment'
            className={styles.iconComment}
          />
          <img src={iconShare} alt='icon share' className={styles.iconShare} />
        </div>

        <img src={iconMarker} alt='icon marker' className={styles.iconMarker} />
      </div>

      <div className={styles.postFooter}>
        <p className={styles.footerLikes}>{item.likes} Likes</p>
        <p className={styles.footerText}>
          <span className={styles.footerUsername}>33AutoPulse</span> {item.text}
        </p>
      </div>
    </div>
  );
};
