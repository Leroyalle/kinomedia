'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Title } from './title';
import { MediaItem } from './media-item';
import { MovieDTO } from '@/@types/mediaDTO';
import { MediaItemsSkeleton } from './media-items-skeleton';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

interface Props {
  items: MovieDTO[];
  title?: string;
  loading: boolean;
  limit?: number;
  className?: string;
}

export const MediaGroupSlider: React.FC<Props> = ({
  items,
  title,
  loading,
  limit = 20,
  className,
}) => {
  if (!items || loading) {
    // TODO: при пустом массивен рендерить пикчу
    return <MediaItemsSkeleton limit={limit} />;
  }

  return (
    <div className={cn('flex flex-col justify-center gap-4', className)}>
      {title && <Title size="lg" text={title} />}
      <div className="">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          navigation
          slidesPerView={5}
          slidesPerGroup={4}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}>
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
                isSeries={item.isSeries}
                ratingKp={item.rating.kp}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
