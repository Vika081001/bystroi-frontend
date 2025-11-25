import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { apiClient } from "@/lib/api/client"
import { Cart, OrderGood } from "@/lib/types/cart"

export const useCart = () => {
    return useQuery<Cart>({
        queryKey: ["cart"],
        queryFn: async () => {
            const response = await apiClient.get("/cart")
            return response.data
        },
    })
}

export const useAddToCart = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (item: OrderGood) => {
            const response = await apiClient.post("/cart", item)
            return response.data
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["cart"] })
        },
    })
}

export const useRemoveFromCart = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (itemId: string) => {
            await apiClient.delete(`/cart/${itemId}`)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["cart"] })
        },
    })
}

export const useUpdateCart = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async ({ itemId, quantity }: { itemId: string; quantity: number }) => {
            const response = await apiClient.put(`/cart/${itemId}`, { quantity })
            return response.data
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["cart"] })
        },
    })
}
