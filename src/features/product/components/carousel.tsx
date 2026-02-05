import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";

import noImage from "../assets/no-image.png";

interface PropsCarousel {
  images?: string[];
}

const CarouselComponent = ({ images = [] }: PropsCarousel) => {
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

  const hasImages = images.length > 0;

  return (
    <>
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-48 sm:max-w-md h-100 border mx-auto rounded-2xl md:max-w-sm md:mx-20"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        setApi={setApi}
      >
        <CarouselContent className="h-full">
          {hasImages ? (
            images.map((image, index) => (
              <CarouselItem key={index} className="h-100">
                <div className="h-full p-1 rounded overflow-hidden flex items-center justify-center">
                  <img
                    src={image}
                    alt={`carousel-${index}`}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </CarouselItem>
            ))
          ) : (
            <CarouselItem className="w-full h-100">
              <div className="h-full p-1 rounded overflow-hidden flex items-center justify-center">
                <img
                  src={noImage}
                  alt="no-image"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </CarouselItem>
          )}
        </CarouselContent>
      </Carousel>
      <div className="flex gap-2 mt-5 justify-center md:justify-start w-full max-w-48 sm:max-w-md md:max-w-sm md:mx-20 mx-auto">
        {hasImages ? (
          <>
            {images.map((image, index) => (
              <button
                onClick={() => api && api.scrollTo(index)}
                className={`h-25 w-20 transition-all cursor-pointer rounded-xl
               ${current === index ? "border" : "bg-secondary"}`}
                key={index}
              >
                <img src={image} alt="no-image" className="" />
              </button>
            ))}
          </>
        ) : (
          <>
            <button
              onClick={() => api && api.scrollTo(0)}
              className={`h-fit w-20 transition-all cursor-pointer rounded-xl overflow-hidden
             ${current === 0 ? "bg-accent-foreground border" : "bg-secondary"}`}
            >
              <img src={noImage} alt="no-image" />
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default CarouselComponent;
