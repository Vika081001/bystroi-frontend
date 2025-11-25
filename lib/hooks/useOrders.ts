import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { apiClient } from "@/lib/api/client"
import { Order } from "@/lib/types/cart"
import { ListResponse } from "@/lib/types/api"
import { addPhoneToParams, createRequestWithPhone } from "@/lib/auth/utils"

interface OrdersParams {
    page?: number
    size?: number
    status?: string
}

export const useOrders = (params: OrdersParams = {}) => {
    return useQuery<ListResponse<Order[]>>({
        queryKey: ["orders", params],
        queryFn: async () => {
            // Add phone to params
            const paramsWithPhone = addPhoneToParams(params)
            const response = await apiClient.get("/orders", { params: paramsWithPhone })
            return response.data
        },
        enabled: true, // Only fetch if user is authenticated
    })
}

export const useOrder = (id: string) => {
    return useQuery<Order>({
        queryKey: ["order", id],
        queryFn: async () => {
            const response = await apiClient.get(`/orders/${id}`)
            return response.data
        },
        enabled: !!id,
    })
}

export const useCreateOrder = () => {
    const queryClient = useQueryClient()
    
    return useMutation({
        mutationFn: async (orderData: any) => {
            // Add phone to order data
            const orderDataWithPhone = createRequestWithPhone(orderData)
            const response = await apiClient.post("/orders", orderDataWithPhone)
            return response.data
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["orders"] })
            queryClient.invalidateQueries({ queryKey: ["cart"] })
        },
    })
}

export const useUpdateOrder = () => {
    const queryClient = useQueryClient()
    
    return useMutation({
        mutationFn: async ({ id, orderData }: { id: string; orderData: any }) => {
            // Add phone to order data
            const orderDataWithPhone = createRequestWithPhone(orderData)
            const response = await apiClient.patch(`/orders/${id}`, orderDataWithPhone)
            return response.data
        },
        onSuccess: (_, { id }) => {
            queryClient.invalidateQueries({ queryKey: ["order", id] })
            queryClient.invalidateQueries({ queryKey: ["orders"] })
        },
    })
}

export const useDeleteOrder = () => {
    const queryClient = useQueryClient()
    
    return useMutation({
        mutationFn: async (id: string) => {
            // Phone will be added automatically via headers
            const response = await apiClient.delete(`/orders/${id}`)
            return response.data
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["orders"] })
        },
    })
}
