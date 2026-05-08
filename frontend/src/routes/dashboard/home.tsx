import { Input, Button } from "@heroui/react";
import { useState } from "react";
import { Accordion } from "@heroui/react";
import { searchMovie } from "@/services/search.service";

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

export default function HomeDashboard() {
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState("");

  const handleSearch = async () => {
    if (search.trim() == "") return;
    const result = await searchMovie(search);

    if (result != undefined && result.data.results.length) {
      setData(result.data.results);
    }
  };

  return (
    <div className="w-full min-h-screen bg-white text-black p-8 flex flex-col gap-8 items-center">
      <div className="flex items-center justify-center space-x-3 mt-10">
        <Input
          value={search}
          type="text"
          placeholder="Busca tu pelicula..."
          onChange={(e) => setSearch(e.target.value)}
          className="w-80"
        />
        <Button onClick={handleSearch} className="bg-black text-white">
          Buscar
        </Button>
      </div>

      {data.length ? (
        <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto gap-8 transition-all duration-500 ease-in-out ">
          <div className="w-full md:w-1/3 max-h-150 overflow-y-auto rounded-xl">
            <Accordion className="w-full shadow-sm rounded-xl border border-gray-200">
              {data.map((item: Movie) => (
                <Accordion.Item key={item.id}>
                  <Accordion.Heading>
                    <Accordion.Trigger>
                      <div className="flex items-center gap-3">
                        <img
                          src={`https://image.tmdb.org/t/p/w92/${item.poster_path}`}
                          className="w-10 h-14 object-cover rounded"
                        />
                        <span className="truncate font-medium">
                          {item.title}
                        </span>
                      </div>
                    </Accordion.Trigger>
                  </Accordion.Heading>

                  <Accordion.Panel>
                    <Accordion.Body className="text-sm text-gray-600">
                      {item.overview || "Not found"}
                      <Button
                        className="mt-4 w-full bg-black text-white"
                        onClick={() => setSelectedMovie(String(item.id))}
                      >
                        Ver pelicula
                      </Button>
                    </Accordion.Body>
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>

          <div className="w-full md:w-2/3">
            {selectedMovie.length > 0 ? (
              <div className="w-full aspect-video bg-black border border-gray-200 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src={`https://vaplayer.ru/embed/movie/${selectedMovie}`}
                  className="w-full h-full"
                  allowFullScreen
                  allow="autoplay; encrypted-media; picture-in-picture"
                  sandbox="allow-scripts allow-same-origin allow-presentation"
                ></iframe>
              </div>
            ) : (
              <div className="w-full aspect-video bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center text-gray-400 shadow-sm">
                Selecciona una pelicula para comenzar
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
