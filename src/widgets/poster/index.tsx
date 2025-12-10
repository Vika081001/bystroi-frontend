import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/kit/carousel";

const Poster = () => {
  const images = [
    "https://avatars.mds.yandex.net/i?id=43f5a7e3ffdb81cbd567b3188c2d0b8f43fb4f5e-4901993-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=a1879461c68095cebf3496b1120dc785bc41d013-17843417-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=6b83bb5ccbcc8b18ce90a7ab5f29a68e6a877227-5296267-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=6a6e76f7822831cb3cd76efd35640cfde03ac07f-4236774-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=c9486682d5c1062d8a49d4bd160442f6a7b98c1f-12262266-images-thumbs&n=13"
  ];
  
  return (
    <section className="relative pt-6">
      <div className="container">
        <Carousel className="h-56 relative overflow-hidden rounded-lg">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="h-56 w-full">
                <img
                  src={image}
                  className="w-full h-full object-fill"
                  alt={`Poster ${index + 1}`}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default Poster;