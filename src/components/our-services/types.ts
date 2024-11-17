import { TServiceListElement } from '../../types/types';

export interface TOurServicesProps {
  servicesElements: TServiceListElement[] | null;
  isLoading?: boolean;
  target: string;
}
