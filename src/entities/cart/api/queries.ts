import { apiClient } from "@/shared/api/client";

import { AddToCartDto, Cart, RemoveFromCartDto } from "../model/types";

const ENTITY_URL = "/cart";

export const fetchCart = async (): Promise<Cart> => {
  const response = await apiClient.get<Cart>(ENTITY_URL, {
    phoneField: "contragent_phone",
  });
  return response.data;
};

export const addToCart = async (data: AddToCartDto): Promise<Cart> => {
  const response = await apiClient.post<Cart>(`${ENTITY_URL}/add`, data);
  return response.data;
};

export const removeFromCart = async (
  data: RemoveFromCartDto,
): Promise<void> => {
  await apiClient.delete(`${ENTITY_URL}/remove`, { data });
};
