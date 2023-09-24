import { useAtomValue } from 'jotai';
import { productsAtom } from '@/app/_store/store';

/**
 * @summary hook that returns a product with the index provided
 */
export const useFetchProductWithID = (index: string) => {
	const allProducts = useAtomValue(productsAtom);
	const productWithID = allProducts.find((product) => product.id === +index);

	return productWithID;
};
