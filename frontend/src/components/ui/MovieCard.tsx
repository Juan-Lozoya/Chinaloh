import { Button, Card } from "@heroui/react";
import { Play } from "lucide-react";

interface MovieCardProps {
  title: string;
  posterUrl: string;
  description?: string;
}

export const MovieCard = ({
  title,
  posterUrl,
  description,
}: MovieCardProps) => {
  return (
    <Card className="group relative w-40 md:w-48 aspect-2/3 overflow-hidden rounded-xl border-none cursor-pointer">
      {/* imagen del fondo */}
      <div className="absolute inset-0 z-0">
        <img
          src={posterUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>

      {/* fondo oscuro y contenido hover */}
      <div className="absolute inset-0 z-10 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
        {/* cabecera Card */}
        <Card.Header className="p-4 pb-0">
          <Card.Title className="text-white text-lg md:text-xl font-bold leading-tight line-clamp-2">
            {title}
          </Card.Title>
        </Card.Header>

        {/* contenido Card */}
        <Card.Content className="px-4 py-2 grow">
          <Card.Description className="text-gray-300 text-xs line-clamp-3">
            {description ||
              "Haz click para ver más contenido sobre esta película"}
          </Card.Description>
        </Card.Content>

        {/* boton */}
        <Card.Footer className="p-4 pt-0">
          <Button className="w-full bg-white text-black text-sm font-semibold py-1.5 rounded-full flex items-center justify-center gap-1 hover:bg-gray-200 transition-colors">
            <Play />
            Ver ahora
          </Button>
        </Card.Footer>
      </div>
    </Card>
  );
};
