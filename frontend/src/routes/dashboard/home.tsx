import { Input, Button } from "@heroui/react";
import { useState } from "react";
import { Accordion } from "@heroui/react";
import { searchMovie } from "@/services/search.service";
import { IconChevronDown } from "@heroui/react";

export default function HomeDashboard() {
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState("");

  const handleSearch = async () => {
    const result = await searchMovie(search);

    // if (result != undefined && result.data.length) {
    setData(result.data.results);
    // }
  };

  return (
    <>
      <div className="w-full h-screen grid">
        <div className="flex items-center justify-center space-x-3">
          <Input
            value={search}
            type="text"
            placeholder="Nombre Pelicula"
            onChange={(e) => setSearch(e.target.value)}
          />

          <Button onClick={handleSearch}>Buscar</Button>
        </div>

        {/* <img
          src="https://image.tmdb.org/t/p/w92/8912AsVuS7Sj915apArUFbv6F9L.jpg"
          alt=""
        /> */}

        {data.length && (
          <Accordion className="w-full max-w-md">
            {data.map((item) => (
              <Accordion.Item key={item.id}>
                <Accordion.Heading>
                  <Accordion.Trigger>
                    <img
                      src={`https://image.tmdb.org/t/p/w92/${item.poster_path}`}
                      alt=""
                    />
                    {item.title}

                    <Accordion.Indicator>
                      <IconChevronDown />
                    </Accordion.Indicator>
                  </Accordion.Trigger>
                </Accordion.Heading>

                <Accordion.Panel>
                  <Accordion.Body>
                    {item.overview}
                    <Button onClick={() => setSelectedMovie(String(item.id))}>
                      Ver Pelicula
                    </Button>
                  </Accordion.Body>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        )}

        {selectedMovie.length && (
          <div className="w-300 h-150 border rounded-lg overflow-hidden self-center justify-self-center">
            <iframe
              src={`https://vaplayer.ru/embed/movie/${selectedMovie}`}
              width="100%"
              height="600"
              frameborder="0"
              allowfullscreen
              allow="autoplay; encrypted-media; picture-in-picture"
            ></iframe>
          </div>
        )}
      </div>
    </>
  );
}
