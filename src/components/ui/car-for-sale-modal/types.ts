import { TCar } from '../../../types/types';

export interface TCarForSaleModalProps {
  car: TCar;
  onClose: () => void;
  carInfo: { title: string; value: string }[];
  onClick: () => void;
}
