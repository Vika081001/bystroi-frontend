import { useQuery, useMutation } from "@tanstack/react-query"
import { apiClient } from "@/lib/api/client"

export const useQrData = (qrCode: string) => {
    return useQuery({
        queryKey: ["qr", qrCode],
        queryFn: async () => {
            const response = await apiClient.get(`/qr/${qrCode}`)
            return response.data
        },
        enabled: !!qrCode,
    })
}

export const useGenerateQr = () => {
    return useMutation({
        mutationFn: async (data: { productId: string; quantity?: number }) => {
            const response = await apiClient.post("/qr/generate", data)
            return response.data
        },
    })
}

export const useQr = () => useQrData
