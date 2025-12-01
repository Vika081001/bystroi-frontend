import Image from "next/image";
import React from "react";

import { Product } from "../model";

type Props = Pick<Product, "images">;

export const ProductImages = ({ images }: Props) => {
  return (
    <div className="flex max-w-xl w-full gap-4 flex-col md:flex-row">
      <div className="grid grid-cols-5 md:flex md:flex-col gap-4">
        {images?.map((item, id) => (
          <div
            key={id}
            className="relative h-16 md:w-20 md:h-20 rounded-md bg-gray-50 ring-2 ring-blue-500 overflow-hidden"
          >
            <Image
              src={item}
              className="object-cover w-full h-full"
              alt="Product Image"
              fill={true}
            />
          </div>
        ))}
      </div>
      <div className="relative flex-1 bg-gray-50 rounded-md overflow-hidden flex items-center justify-center">
        <Image
          src={images?.[0] ?? "https://picsum.photos/800/600"}
          className="object-cover w-full h-full"
          alt="Product Image"
          fill={true}
        />
      </div>
    </div>
  );
};
