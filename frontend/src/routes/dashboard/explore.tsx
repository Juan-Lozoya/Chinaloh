import { MovieCarousel } from "@/components/MovieCarousel";
import { useQuery } from "@tanstack/react-query";
import { getTrends } from "@/services/trends.service";

export default function ExploreDashboardPage() {
  const { data } = useQuery({
    queryKey: ["trends"],
    queryFn: getTrends,
  });

  const movies = data?.data?.movies.results || [];
  const tv = data?.data?.tv.results || [];

  const watchSeries = (id: string) => {
    window.open(`https://vaplayer.ru/embed/tv/${id}/1/1`, "_blank");
  };

  const watchMovie = (id: string) => {
    window.open(`https://vaplayer.ru/embed/movie/${id}`, "_blank");
  };

  return (
    <>
      <MovieCarousel
        title="Tendencias de la Semana en Peliculas"
        movies={movies}
        onAction={watchMovie}
      />

      <MovieCarousel
        title="Tendencias de la Semana en Series"
        movies={tv}
        onAction={watchSeries}
      />
    </>
  );
}
