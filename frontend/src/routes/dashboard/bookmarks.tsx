import { MovieCarousel } from "@/components/ui/MovieCarousel";

export default function bookmarkDashboardPage() {
  return (
    <>
      {/* prueba carrusel*/}
      <div className="w-full mt-12">
        <MovieCarousel
          title="Tendencias de la semana"
          movies={[
            {
              id: 1,
              title: "The Batman",
              poster:
                "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
              overview:
                "Cuando un asesino en serie sádico comienza a asesinar a figuras políticas clave en Gotham, Batman investiga la corrupción oculta.",
            },
            {
              id: 2,
              title: "John Wick 4",
              poster:
                "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
              overview:
                "John Wick descubre un camino para derrotar a la Alta Mesa. Pero antes debe enfrentarse a un nuevo enemigo.",
            },
            {
              id: 3,
              title: "Blade Runner 2049",
              poster:
                "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
              overview:
                "Un nuevo blade runner descubre un secreto oculto que tiene el potencial de hundir a la sociedad en el caos.",
            },
          ]}
        />
      </div>
    </>
  );
}
