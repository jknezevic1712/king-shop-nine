'use client';

import { useEffect } from 'react';
// components
import HomeTemplate from '../_components/templates/homeTemplate/homeTemplate';
import LoadingSpinner from '../_components/atoms/loadingSpinner/loadingSpinner';
// hooks
import { useFetchAllProducts } from '../_hooks/products/useFetchAllProducts';
import { useSetAtom } from 'jotai';
// store
import { productsAtom } from '../_store/store';

function withDataFetching(Component: (props: any) => JSX.Element) {
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

const Home = withDataFetching(HomeTemplate);

export default Home;
