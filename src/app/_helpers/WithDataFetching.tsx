'use client';

import { useEffect } from 'react';
import { useSetAtom } from 'jotai';
// hooks
import { useFetchAllProducts } from '../_hooks/products/useFetchAllProducts';
// store
import { productsAtom } from '../_store/store';
// components
import LoadingSpinner from '../_components/atoms/loadingSpinner/L1oadingSpinner';

export default function withDataFetching(
	Component: (props: any) => JSX.Element
) {
	return function DataFetchingComponent(props: any) {
		const allProducts = useFetchAllProducts();
		const setAllProducts = useSetAtom(productsAtom);

		useEffect(() => {
			setAllProducts(allProducts ?? []);
		}, [allProducts, setAllProducts]);

		if (!allProducts)
			return (
				<div className='flex h-full w-full items-center justify-center p-24'>
					<LoadingSpinner size='lg' />
				</div>
			);

		return <Component {...props} products={allProducts} />;
	};
}
