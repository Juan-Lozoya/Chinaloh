import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselArrowProps {
  direction: "left" | "right";
  onClick: () => void;
}

export const CarouselArrow = ({ direction, onClick }: CarouselArrowProps) => {
  const isLeft = direction === "left";

  return (
    <>
      <button
        onClick={onClick}
        className="hidden mx-7 md:flex shrink-0 items-center justify-center w-10 h-10 bg-white/90 text-black rounded-full shadow-md transition-all hover:scale-110 hover:bg-white border border-gray-200 cursor-pointer"
      >
        {/* flecha dependiendo la direccion */}
        {isLeft ? (
          <ChevronLeft className="w-6 h-6" />
        ) : (
          <ChevronRight className="w-6 h-6" />
        )}
      </button>
    </>
  );
};
