import { FC } from 'react';
import { ServiceListElementUI } from '../ui/service-list-element';
import { TServiceListElementProps } from '../ui/service-list-element/types';

export const ServiceListElement: FC<TServiceListElementProps> = ({
  title,
  text,
  imgSrc,
  imgAlt
}) => {
  return (
    <ServiceListElementUI
      title={title}
      text={text}
      imgSrc={imgSrc}
      imgAlt={imgAlt}
    />
  );
};
