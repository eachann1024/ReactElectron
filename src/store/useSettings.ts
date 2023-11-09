import { create } from 'zustand'

interface State {
  navList: { label: string; value: string }[]
  updateNavList: (navList: any) => void
}
interface Action {
  updateNavList: (navList: any) => void
}
export const useSettingsStore = create<State & Action>(set => ({
  navList: [
    { label: 'All', value: 'All' },
    { label: 'Mark', value: 'Mark' },
    { label: 'Image', value: 'Image' },
    { label: 'File', value: 'File' },
  ],
  updateNavList: (navList: any) => set({ navList }),
}))
