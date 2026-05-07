import { Input, Button } from "@heroui/react";
import { useState } from "react";
import { searchMovie } from "@/services/search.service";

export default function HomeDashboard() {
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState([]);

  const handleSearch = async () => {
    const result = await searchMovie(search);

    if (result != undefined && result.data.length) {
      setData(result.data.results);
    }
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

        {data.length && (
          <div>
            <h1>Hola</h1>
          </div>
        )}

        {/* <img
          src="https://image.tmdb.org/t/p/w342/8912AsVuS7Sj915apArUFbv6F9L.jpg"
          alt=""
        /> */}

        <div className="w-300 h-150 border rounded-lg overflow-hidden self-center justify-self-center">
          <iframe
            src="https://vaplayer.ru/embed/movie/1314481"
            width="100%"
            height="600"
            frameborder="0"
            allowfullscreen
            allow="autoplay; encrypted-media; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </>
  );
}
