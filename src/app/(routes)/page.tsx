'use client';

import { useEffect } from 'react';
// components
import HomeTemplate from '../_components/templates/homeTemplate/homeTemplate';
// hooks
import { useFetchAllProducts } from '../_hooks/products/useFetchAllProducts';
import { useAtom } from 'jotai';
import { productsAtom } from '../_store/store';

export default function Home() {
	const allProducts = useFetchAllProducts();
	const [_, setAllProducts] = useAtom(productsAtom);

	useEffect(() => {
		setAllProducts(allProducts ?? []);
	}, [allProducts]);

	return <HomeTemplate products={allProducts} />;
}
