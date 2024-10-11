import {
  Container,
  MainBannerWrapper,
  MediaGroupSliderWrapper,
  RandomMovie,
} from '@/shared/components/shared';

export default function Home() {
  return (
    <Container>
      <MainBannerWrapper />
      <MediaGroupSliderWrapper
        className="mt-14"
        title={'Новинки'}
        limit={20}
        params="&rating.kp=7-10&year=2024&genres.name=!аниме"
      />
      <RandomMovie params="&genres.name=!мультфильм&&genres.name=!аниме" />
      <MediaGroupSliderWrapper
        className="mt-14"
        title={'Фэнтези'}
        limit={20}
        params="&rating.kp=7-10&year=2024&genres.name=%2Bфэнтези&genres.name=!аниме"
      />
      <MediaGroupSliderWrapper
        className="mt-14"
        title={'Комедии'}
        limit={20}
        params="&rating.kp=7-10&year=2024&genres.name=%2Bкомедия&genres.name=!аниме"
      />
    </Container>
  );
}
