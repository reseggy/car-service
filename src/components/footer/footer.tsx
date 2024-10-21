import { FC } from 'react';
import { FooterUI } from '../ui/footer';

export const Footer: FC = () => {
  const postFooterLinks = {
    'Privacy policy': '#',
    'Legal notice': '#',
    Cookie: '#',
    Sitemap: '#'
  };

  const servicesLinks = {
    'Bodywork parts': '#',
    'Stk and transcription of vehicles': '#',
    Ceramics: '#',
    'Vehicle washing and interior cleaning': '#',
    '3D Geometry': '#'
  };
  return (
    <FooterUI postFooterLinks={postFooterLinks} servicesLinks={servicesLinks} />
  );
};
