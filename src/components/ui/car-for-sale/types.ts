import { TCar } from '../../../types/types';

export interface TCarForSaleProps {
  car: TCar;
  onClick: () => void;
  onClose: () => void;
  isModalOpen: boolean;
}
