import React from 'react';
import { Title } from '../title';
import { MyMediaList } from './blocks';

interface Props {
  className?: string;
}

export const MyMediaWrapper: React.FC<Props> = ({ className }) => (
  <div className={className}>
    <Title text="Моё" size="lg" className="mb-10" />
    <MyMediaList />
  </div>
);
