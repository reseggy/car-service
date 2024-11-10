import { IDropdownItem } from '../../types/types';

export interface IDropdownProps {
  items: IDropdownItem[];
  mode?: string;
  onLinkClick?: () => void;
}
