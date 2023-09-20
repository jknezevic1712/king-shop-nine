import { atom } from 'jotai';
import { atomWithStorage, loadable } from 'jotai/utils';
// types
import { Product } from '../_types/apiResponse';

export const darkModeAtom = atomWithStorage('darkMode', true);

export const productsAtom = atom<Product[]>([]);
// export const loadableProductsAtom = loadable(productsAtom);
