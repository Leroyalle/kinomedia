'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { PersonData } from '@/@types/person';
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
          <Link href={'/'} className="flex flex-col gap-1 max-w-32">
            <Image
              className="block w-[160px] h-[150px] rounded-[50%] object-cover"
              src={person.photo}
              alt={person.name ?? person.enName}
              width={160}
              height={160}
            />
            <div className="flex flex-col">
              <span className="font-medium">{person.name ?? person.enName}</span>
              <span className="text-white/70">{person.profession.slice(0, -1)}</span>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
