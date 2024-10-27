import { FC } from 'react';
import { ServiceListElementUI } from '../ui/service-list-element';
import { TServiceListElementProps } from './types';
import { useNavigate } from 'react-router-dom';

export const ServiceListElement: FC<TServiceListElementProps> = ({
  title,
  text,
  imgSrc,
  imgAlt,
  target
}) => {
  const navigate = useNavigate();

  const onClick = () => {
    if (target === 'main') {
      navigate('/services');
    } else {
      navigate('/contacts');
    }
  };

  return (
    <ServiceListElementUI
      title={title}
      text={text}
      imgSrc={imgSrc}
      imgAlt={imgAlt}
      target={target}
      onClick={onClick}
    />
  );
};
