import { FC } from 'react';
import { AdvantageUI } from '../ui/advantage';
import { TAdvantageProps } from './types';

export const Advantage: FC<TAdvantageProps> = ({
  title,
  text,
  imgSrc,
  imgAlt,
  counter
}) => {
  return (
    <AdvantageUI
      title={title}
      text={text}
      imgSrc={imgSrc}
      imgAlt={imgAlt}
      counter={counter}
    />
  );
};
