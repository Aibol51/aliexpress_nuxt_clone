import { defineStore } from 'pinia'

interface UserState {
  isMenuOverlay: boolean
  isLoading: boolean
  cart: any[]
  checkout: any[]

}


export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    isMenuOverlay: false,
    isLoading: false,
    cart: [],
    checkout: []
  }),
  persist: true
})