"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { ProductCard, useInfProducts } from "@/entities/product";
import { ProductCardSkeleton } from "@/entities/product/ui/product-card-skeleton";

const ProductsList = () => {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfProducts({ size: 20 });

  const { ref, inView } = useInView({
    threshold: 0.5, // Триггер срабатывает, когда элемент виден на 50%
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (isLoading) {
    return (
      <div className="flex flex-col max-w-full w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {Array.from({ length: 10 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return <div>Ошибка загрузки товаров</div>;
  }

  return (
    <div className="flex flex-col max-w-full w-full">
      <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {data?.pages.map((page, i) => (
          <React.Fragment key={i}>
            {page.result.map((product) => (
              <ProductCard {...product} key={product.id} />
            ))}
          </React.Fragment>
        ))}

        {isFetchingNextPage &&
          Array.from({ length: 5 }).map((_, index) => (
            <ProductCardSkeleton key={`loader-${index}`} />
          ))}
      </div>

      {/* Невидимый элемент для триггера загрузки */}
      <div ref={ref} className="h-10 w-full bg-transparent" />
    </div>
  );
};

export default ProductsList;
