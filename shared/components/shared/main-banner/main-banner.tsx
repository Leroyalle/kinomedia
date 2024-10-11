'use client';
import React from 'react';
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { MovieDTO } from '@/@types/mediaDTO';
import { MainBannerItem } from './main-banner-item';
import { FreeMode, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

interface Props {
  items: MovieDTO[];
  limit?: number;
  className?: string;
}

export const MainBanner: React.FC<Props> = ({ items, limit = 5, className }) => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState<SwiperClass>();

  return (
    <>
      <Swiper
        spaceBetween={10}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className={className}>
        {items.map((item) => (
          <SwiperSlide className="relative rounded-xl w-full h-full" key={item.id}>
            <div className="relative h-full w-full">
              <div className="pb-[32%]" />
              <MainBannerItem
                id={item.id}
                imageUrl={item.backdrop.url}
                name={item.name ?? item.enName}
                ratingKp={item.rating.kp}
                year={item.year}
                genre={item.genres[0].name}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        navigation={true}
        spaceBetween={10}
        slidesPerView={7}
        slidesPerGroup={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="bottom-gallery">
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.backdrop.url}
              alt={item.name}
              width={200}
              height={100}
              className="rounded-xl"
            />
            {/* TODO: добавить прогрессбар */}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
