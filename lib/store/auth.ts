import { create } from 'zustand'
import { User } from '../types/user'
import { persist, createJSONStorage } from 'zustand/middleware'

interface AuthState {
    user: User | null
    isAuthenticated: boolean
    login: (user: any) => void
    logout: () => void
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,
            login: (user: any) =>
                set({ user, isAuthenticated: true }),
            logout: () =>
                set({ user: null, isAuthenticated: false }),
        }),
        {
            name: "auth-store",
            storage: createJSONStorage(() => localStorage),
        },
    ),
)