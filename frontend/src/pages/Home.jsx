import CarouselDefault from "../components/Carousel/CarouselDefault";
import Statistics from "../components/Statistics/Statistics";
import CarouselMovies from "../components/Carousel/CarouselMovies";
export default function Home() {
  return (
    <div className="mb-10">
      <CarouselDefault />
      <CarouselMovies title={'NOW PLAYING'}/>
      <CarouselMovies title={'POPULAR'}/>
      <Statistics />
    </div>

  );
}