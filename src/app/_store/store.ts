import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import _ from 'lodash';

interface AppState {
	utils: {
		darkMode: boolean;
	};
}
interface AppActions {
	// increase: (by: number) => void
	utils: {
		changeTheme: () => void;
	};
}
const useAppStore = create<AppState & AppActions>()(
	devtools(
		persist(
			(set, get) => ({
				// increase: (by) => set((state) => ({ bears: state.bears + by })),
				utils: {
					darkMode: true,
					changeTheme: () =>
						set({ utils: { ...get().utils, darkMode: !get().utils.darkMode } }),
				},
			}),
			{
				name: 'king-shop-nine-state',
				merge: (persistedState, currentState) =>
					_.merge(currentState, persistedState),
			}
		)
	)
);

export default useAppStore;
