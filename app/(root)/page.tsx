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
        params="&rating.kp=8-10&year=2024&genres.name=!аниме"
      />
      <RandomMovie params="&genres.name=!мультфильм&&genres.name=!аниме" />
      <MediaGroupSliderWrapper
        className="mt-14"
        title={'Фентези'}
        params="&rating.kp=8-10&year=2024&genres.name=%2Bфэнтези&genres.name=!аниме"
      />
      <MediaGroupSliderWrapper
        className="mt-14"
        title={'Комедии'}
        params="&rating.kp=8-10&year=2024&genres.name=%2Bкомедия&genres.name=!аниме"
      />
    </Container>
  );
}
