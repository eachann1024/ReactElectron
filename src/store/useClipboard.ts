import { create } from 'zustand'

interface State {
  clip: any[]
}
interface Action {
  updateClip: (clip: any) => void
}
export const useClipboardStore = create<State & Action>(set => ({
  clip: [],
  updateClip: clip => set(() => {
    console.log('%c -> clip ', 'font-size:13px; background:pink; color:#bf2c9f')
    return { clip }
  }),
}))
