import { create } from 'zustand'

interface State {
}

interface Action {
}
export const useAppStore = create<State & Action>(set => ({
  version: '',
  forceUpdate: false,
}))
