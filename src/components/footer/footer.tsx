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
    'Bodywork parts': '/services',
    'Stk and transcription of vehicles': '/services',
    Ceramics: '/services',
    'Vehicle washing and interior cleaning': '/services',
    '3D Geometry': '/services'
  };
  return (
    <FooterUI postFooterLinks={postFooterLinks} servicesLinks={servicesLinks} />
  );
};
