'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Title } from './title';
import { MediaItem } from './media-item';
import { MovieDTO } from '@/@types/mediaDTO';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Props {
  items: MovieDTO[];
  title?: string;
  className?: string;
}

export const MediaGroupSlider: React.FC<Props> = ({ items, title, className }) => {
  return (
    <div className={cn('flex flex-col justify-center gap-4', className)}>
      {title && <Title size="lg" text={title} />}
      <div>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          navigation
          slidesPerView={5.2}
          slidesPerGroup={4}
          pagination={{ clickable: true }}>
          {items.map((item, i) => (
            <SwiperSlide className="transition ease-in-out duration-500 hover:scale-105" key={i}>
              <MediaItem
                key={item.id}
                id={item.id}
                name={item.name}
                previewUrl={item?.poster?.previewUrl}
                year={item.year}
                movieLength={item.movieLength}
                seriesLength={item.seriesLength}
                ratingKp={item.rating.kp}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
