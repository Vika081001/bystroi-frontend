import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { apiClient } from "@/lib/api/client"
import { Review } from "@/lib/types/review"
import { ListResponse } from "@/lib/types/api"

interface ReviewsParams {
    productId?: string
    page?: number
    size?: number
}

export const useReviews = (params: ReviewsParams = {}) => {
    return useQuery<ListResponse<Review[]>>({
        queryKey: ["reviews", params],
        queryFn: async () => {
            const response = await apiClient.get("/reviews", { params })
            return response.data
        },
    })
}

export const useCreateReview = () => {
    const queryClient = useQueryClient()
    
    return useMutation({
        mutationFn: async (review: Omit<Review, "id" | "createdAt">) => {
            const response = await apiClient.post("/reviews", review)
            return response.data
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["reviews"] })
        },
    })
}

export const useUpdateReview = () => {
    const queryClient = useQueryClient()
    
    return useMutation({
        mutationFn: async ({ id, ...review }: Partial<Review> & { id: string }) => {
            const response = await apiClient.put(`/reviews/${id}`, review)
            return response.data
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["reviews"] })
        },
    })
}

export const useRemoveReview = () => {
    const queryClient = useQueryClient()
    
    return useMutation({
        mutationFn: async (id: string) => {
            await apiClient.delete(`/reviews/${id}`)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["reviews"] })
        },
    })
}
