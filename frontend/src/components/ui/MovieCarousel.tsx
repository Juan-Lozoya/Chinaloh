import { MovieCard } from "./MovieCard";

interface Movie {
  id: number;
  title: string;
  poster: string;
  overview?: string;
}

interface MovieCarouselProps {
  title: string;
  movies: Movie[];
}

export const MovieCarousel = ({ title, movies }: MovieCarouselProps) => {
  return (
    <>
      <div className="w-full flex flex-col gap-4 mb-8">
        {/* titulo de la categoria */}
        <h2 className="text-2xl font-bold text-gray-900 px-2 tracking-tight">
          {title}
        </h2>

        {/* scroll horizontal del componente CARD */}
        <div className="flex overflow-x-auto gap-4 px-2 scrollbar-hide snap-x">
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
      </div>
    </>
  );
};
