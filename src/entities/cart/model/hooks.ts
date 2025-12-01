import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import * as cartApi from "../api";
import { AddToCartDto, RemoveFromCartDto } from "./types";

export const cartKeys = {
  root: ["cart"] as const,
};

export const useCart = () => {
  return useQuery({
    queryKey: cartKeys.root,
    queryFn: cartApi.fetchCart,
  });
};

export const useAddToCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dto: AddToCartDto) => cartApi.addToCart(dto),
    onSuccess: (updatedCart) => {
      queryClient.setQueryData(cartKeys.root, updatedCart);
    },
  });
};

export const useRemoveFromCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dto: RemoveFromCartDto) => cartApi.removeFromCart(dto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: cartKeys.root });
    },
  });
};
