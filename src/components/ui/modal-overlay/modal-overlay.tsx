import styles from './modal-overlay.module.css';

export const ModalOverlayUI = ({ onClose }: { onClose: () => void }) => {
  return <div className={styles.overlay} onClick={onClose} />;
};
