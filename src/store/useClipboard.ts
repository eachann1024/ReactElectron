import { create } from 'zustand'

interface State {
	clipboard: { content: any; date: string }[]
}
interface Action {
	updateClip: (clipboard: any) => void
}
export const useClipboardStore = create<State & Action>((set) => ({
	clipboard: [],
	updateClip: (clipboard) =>
		set(() => {
			return { clipboard }
		}),
}))
