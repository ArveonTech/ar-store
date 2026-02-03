import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";

import Carousel1 from "../assets/1Carousel.jpg";
import Carousel2 from "../assets/2Carousel.jpg";
import Carousel3 from "../assets/3Carousel.jpg";
import Carousel4 from "../assets/4Carousel.jpg";

const imagesCarousel = [Carousel1, Carousel2, Carousel3, Carousel4];

const CarouselComponent = () => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-100 "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      setApi={setApi}
    >
      <CarouselContent className="h-full">
        {imagesCarousel.map((image, index) => (
          <CarouselItem key={index} className="w-full h-100">
            <div className="h-full p-1 rounded overflow-hidden flex items-center justify-center">
              <img
                src={image}
                alt={`carousel-${index}`}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex gap-2 mt-5 justify-center">
        {imagesCarousel.map((_, index) => (
          <button
            key={index}
            onClick={() => api && api.scrollTo(index)}
            className={`h-2 w-2 rounded-full transition-all
              ${current === index ? "bg-accent-foreground" : "bg-secondary"}`}
          ></button>
        ))}
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
