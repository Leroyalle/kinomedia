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
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
      {persons.map((person, i) => (
        <SwiperSlide className="mr-0" key={i}>
          <MediaPageCreatorsItem
            imageUrl={person.photo}
            name={person.name}
            profession={person.profession}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
