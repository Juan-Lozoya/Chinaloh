import { useRef } from "react";
import { MovieCard } from "./ui/MovieCard";
import { CarouselArrow } from "./ui/CarouselArrow"; // <-- Importamos tu nuevo componente

interface Movie {
  id: number;
  title: string;
  poster: string;
  overview?: string;
}

interface MovieCarouselProps {
  title?: string;
  movies: Movie[];
}

export const MovieCarousel = ({ title, movies }: MovieCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 500, behavior: "smooth" });
  };

  return (
    <>
      <div className="w-full flex flex-col gap-4 mb-8">
        {title && (
          <h2 className="text-2xl font-bold text-gray-900 px-2 tracking-tight">
            {title}
          </h2>
        )}

        <div className="flex items-center gap-2 w-full">
          {/* componente flecha izquierda*/}
          <CarouselArrow direction="left" onClick={scrollLeft} />

          {/* contendor que mapea las peliculas */}
          <div
            className="flex overflow-x-auto gap-4 py-4 px-2 snap-x w-full hide-scroll"
            ref={scrollRef}
          >
            {movies.map((movie) => (
              <div key={movie.id} className="flex-none snap-start">
                <MovieCard
                  title={movie.title}
                  posterUrl={movie.poster}
                  description={movie.overview}
                />
              </div>
            ))}
          </div>

          {/* componente flecha derecha */}
          <CarouselArrow direction="right" onClick={scrollRight} />
        </div>
      </div>
    </>
  );
};
