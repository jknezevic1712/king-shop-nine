import { atom } from 'jotai';
import { atomWithStorage, loadable } from 'jotai/utils';
// Types
import { Product } from '../_types/apiResponse';

export const themeModeAtom = atomWithStorage<'light' | 'dark'>(
	'themeMode',
	'dark'
);
export const productsAtom = atom<Product[]>([]);
