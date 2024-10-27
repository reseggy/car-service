import { forwardRef } from 'react';
import styles from './modal-overlay.module.css';

interface ModalOverlayUIProps {
  onClose: () => void;
}

export const ModalOverlayUI = forwardRef<HTMLDivElement, ModalOverlayUIProps>(
  ({ onClose }, ref) => {
    return <div ref={ref} className={styles.overlay} onClick={onClose}></div>;
  }
);
