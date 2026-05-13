import { MovieCarousel } from "@/components/MovieCarousel";

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
            {
              id: 4,
              title: "Dune",
              poster:
                "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
              overview:
                "Paul Atreides, un joven brillante y talentoso nacido con un gran destino, debe viajar al planeta más peligroso del universo para asegurar el futuro de su familia y su pueblo.",
            },
            {
              id: 5,
              title: "Taxi Driver",
              poster:
                "https://image.tmdb.org/t/p/w500/ekstpH614fwDX8DUln1a2Opz0N8.jpg",
              overview:
                "Un veterano de la guerra de Vietnam mentalmente inestable trabaja como taxista nocturno en la ciudad de Nueva York, donde la decadencia y la sordidez alimentan su impulso de acción violenta.",
            },
            {
              id: 6,
              title: "Licorice Pizza",
              poster:
                "https://media.themoviedb.org/t/p/w300_and_h450_face/5ASO5vN6tImSLqw2BhLBxnrwVPd.jpg",
              overview:
                "La historia de Alana Kane y Gary Valentine, de cómo se conocen, pasan el tiempo juntos y acaban enamorándose en el Valle de San Fernando en 1973.",
            },
            {
              id: 7,
              title: "Iron Man",
              poster:
                "https://media.themoviedb.org/t/p/w300_and_h450_face/tFCTNx7foAsUQpgu2x1KjAJD1wT.jpg",
              overview:
                "Después de sobrevivir a un ataque inesperado en territorio enemigo, el industrial Tony Stark construye una armadura de alta tecnología y promete proteger el mundo como Iron Man.",
            },
            {
              id: 8,
              title: "Mystic River",
              poster:
                "https://media.themoviedb.org/t/p/w300_and_h450_face/5XmP7mdjoxDVw9F3mBTgMQLbExu.jpg",
              overview:
                "Las vidas de tres hombres que fueron amigos en la infancia se ven destrozadas cuando uno de ellos sufre una tragedia familiar.",
            },
            {
              id: 9,
              title: "Transformers",
              poster:
                "https://media.themoviedb.org/t/p/w300_and_h450_face/jNZOozjyWKC0jTTvpZ3KOobGcED.jpg",
              overview:
                "Dos razas de robots alienígenas, los Autobots y los Decepticons, traen su guerra a la Tierra, poniendo en peligro a la humanidad.",
            },
            {
              id: 10,
              title: "El lobo de wall street",
              poster:
                "https://media.themoviedb.org/t/p/w300_and_h450_face/7E14ZPR7SehW7Tpm2cVCkR6k3l7.jpg",
              overview:
                "Basada en la verdadera historia de Jordan Belfort, desde su ascenso a un rico corredor de bolsa viviendo la alta vida, hasta su caída.",
            },
            {
              id: 11,
              title: "Arrival",
              poster:
                "https://media.themoviedb.org/t/p/w300_and_h450_face/tbVITeytclB4JKx2LxxasrCCmZx.jpg",
              overview:
                "Cuando misteriosas naves espaciales aterrizan en todo el mundo, un equipo de élite, liderado por la lingüista Louise Banks, es reunido para investigar.",
            },
            {
              id: 12,
              title: "Petroleo sangriento",
              poster:
                "https://media.themoviedb.org/t/p/w300_and_h450_face/o8VQMSZecPNWtYP42yWo2OH1gH0.jpg",
              overview:
                "Una historia sobre la familia, la avaricia, la religión y el petróleo, centrada en un buscador de petróleo de principios del siglo XX en sus primeros días de éxito.",
            },
            {
              id: 13,
              title: "Oppenheimer",
              poster:
                "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
              overview:
                "La historia del físico estadounidense J. Robert Oppenheimer, su papel en el Proyecto Manhattan y el desarrollo de la bomba atómica.",
            },
            {
              id: 14,
              title: "La Isla Siniestra",
              poster:
                "https://media.themoviedb.org/t/p/w300_and_h450_face/oemYX0Do8bxqVHtfCJA9c32Q5w5.jpg",
              overview:
                "En 1954, un alguacil federal investiga la desaparición de una asesina de un hospital para criminales dementes en una isla remota.",
            },
            {
              id: 15,
              title: "Interstellar",
              poster:
                "https://media.themoviedb.org/t/p/w300_and_h450_face/d1QKiYtceF3GDtxvTFXFAqwwah9.jpg",
              overview:
                "Al ver que la vida en la Tierra está llegando a su fin, un grupo de exploradores emprende la misión más importante de la historia de la humanidad.",
            },
          ]}
        />
      </div>
    </>
  );
}
