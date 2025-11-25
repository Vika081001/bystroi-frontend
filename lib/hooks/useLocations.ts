import { useQuery } from "@tanstack/react-query"
import { apiClient } from "@/lib/api/client"
import { Location } from "@/lib/types/location"
import { ListResponse } from "@/lib/types/api"

export const useLocations = () => {
    return useQuery<Location[]>({
        queryKey: ["locations"],
        queryFn: async () => {
            const response = await apiClient.get("/locations")
            return response.data
        },
    })
}

export const useCities = (regionId?: string) => {
    return useQuery<Location[]>({
        queryKey: ["cities", regionId],
        queryFn: async () => {
            const response = await apiClient.get(`/locations/cities/${regionId}`)
            return response.data
        },
        enabled: !!regionId,
    })
}

export const useWarehouses = (cityId?: string) => {
    return useQuery<Location[]>({
        queryKey: ["warehouses", cityId],
        queryFn: async () => {
            const response = await apiClient.get(`/locations/warehouses/${cityId}`)
            return response.data
        },
        enabled: !!cityId,
    })
}
