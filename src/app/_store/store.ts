import { atom } from 'jotai';
import { atomWithStorage, loadable } from 'jotai/utils';
// types
import { Product } from '../_types/apiResponse';

function readThemeFromLocalStorage() {
	let themeValue = false;

	if (localStorage) {
		themeValue = Boolean(localStorage.getItem('darkMode'));
	}
	// console.log('THEME VALUE ', themeValue);

	return themeValue;
}

export const darkModeAtom = atomWithStorage(
	'darkMode',
	readThemeFromLocalStorage()
);

export const productsAtom = atom<Product[]>([]);
// export const loadableProductsAtom = loadable(productsAtom);
