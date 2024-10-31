import { IDropdownItem } from '../../../types/types';

export interface IDropdownProps {
  items: IDropdownItem[];
  handleToggle: () => void;
  handleSelect: (item: IDropdownItem) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  currentItem: IDropdownItem | null;
  mode?: string;
}
