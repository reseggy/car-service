import { FC } from 'react';
import { AppHeaderUI } from '../ui/app-header';

export const AppHeader: FC = () => {
  const lang = 'en'; //TODO: получать из стора

  return <AppHeaderUI lang={lang || ''} />;
};
