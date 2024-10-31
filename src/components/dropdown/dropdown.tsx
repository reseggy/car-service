import { FC, useState } from 'react';
import { DropdownUI } from '../ui/dropdown-ui';
import { IDropdownProps } from './types';
import { useNavigate } from 'react-router-dom';
import { IDropdownItem } from '../../types/types';

export const Dropdown: FC<IDropdownProps> = ({ items, mode }) => {
  const navigate = useNavigate();
  const [currentItem, setCurrentItem] = useState<IDropdownItem | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item: IDropdownItem) => {
    if (mode === 'language') {
      setCurrentItem(item);
    } else {
      navigate('/services');
    }
    setIsOpen(false);
  };

  return (
    <DropdownUI
      items={items}
      handleToggle={handleToggle}
      handleSelect={handleSelect}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      currentItem={currentItem}
      mode={mode}
    />
  );
};
