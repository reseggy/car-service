import { FC } from 'react';
import { AdvantageUI } from '../ui/advantage';
import { IAdvantageProps } from './types';

export const Advantage: FC<IAdvantageProps> = ({
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
