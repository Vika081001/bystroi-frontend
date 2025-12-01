import { apiClient, baseURL } from "@/shared/api/client";
import { ListResponse } from "@/shared/types";

import { GetProductDto, GetProductsDto, Product } from "../model";

const ENTITY_URL = "/products";

export const fetchProducts = async (
  params: GetProductsDto,
): Promise<ListResponse<Product[]>> => {
  const response = await apiClient.get<ListResponse<Product[]>>(ENTITY_URL, {
    params,
  });
  return response.data;
};

export const fetchProduct = async (data: GetProductDto): Promise<Product> => {
  const response = await apiClient.get<Product>(
    `${ENTITY_URL}/${data.product_id}`,
  );
  return response.data;
};

export const fetchProductServer = async (
  id: string,
): Promise<Product | null> => {
  try {
    const res = await fetch(`${baseURL}${ENTITY_URL}/${id}`, {
      next: {
        tags: [`product-${id}`],
        revalidate: 60,
      },
    });

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Failed to fetch product: ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    console.error("Server Fetch Error:", error);
    return null;
  }
};
