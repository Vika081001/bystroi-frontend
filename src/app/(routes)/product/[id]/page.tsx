import React from "react";
import { isMobile } from "react-device-detect";

import { fetchProductServer } from "@/entities/product";

import { AddToCart } from "@/feature/add-to-cart";

import ProductViewed from "./Viewed";
import ProductInfo from "./info";
import ProductReviews from "./reviews";
import ProductСharacteristics from "./Сharacteristics";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const product = await fetchProductServer(id);

  if (!product) {
    return "404";
  }

  return (
    <div className="container">
      <div className="flex gap-8 flex-col xl:flex-row">
        <div className="flex flex-col">
          <ProductInfo {...product} />

          {isMobile && <AddToCart {...product} />}
          <ProductСharacteristics />
          <ProductReviews />
        </div>
        {!isMobile && <AddToCart {...product} />}
      </div>
      <ProductViewed />
    </div>
  );
}
