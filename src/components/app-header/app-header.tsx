import { FC } from 'react';
import { AppHeaderUI } from '../ui/app-header';

export const AppHeader: FC = () => {
  const lang = 'eng';

  return <AppHeaderUI lang={lang || ''} />;
};
