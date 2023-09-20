import { useAtomValue } from 'jotai';
import { productsAtom } from '@/app/_store/store';

export const useFetchProductWithID = (index: string) => {
	const allProducts = useAtomValue(productsAtom);
	const productWithID = allProducts.find((product) => product.id === +index);

	return productWithID;
};
