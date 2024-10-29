'use client';
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { PersonData } from '@/@types/person';
import { MediaPageCreatorsItem } from './media-page-creators-item';
interface Props {
  persons: PersonData[];
  className?: string;
}

export const MediaPageCreators: React.FC<Props> = ({ persons, className }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      navigation
      slidesPerView={8}
      slidesPerGroup={7}
      pagination={{ clickable: true }}>
      {persons.map((person, i) => (
        <SwiperSlide className="transition hover:-translate-y-1" key={i}>
          <MediaPageCreatorsItem
            id={person.id}
            imageUrl={person.photo}
            name={person.name ?? person.enName}
            profession={person.profession}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
