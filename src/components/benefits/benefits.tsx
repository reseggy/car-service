import { FC } from 'react';
import { BenefitsUI } from '../ui/benefits';
import { BenefitsProps } from './types';

export const Benefits: FC<BenefitsProps> = ({ advantages }) => {
  return <BenefitsUI advantages={advantages} />;
};
