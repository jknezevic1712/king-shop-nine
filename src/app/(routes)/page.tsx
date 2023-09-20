'use client';

// components
import HomeTemplate from '../_components/templates/homeTemplate/homeTemplate';
// hooks
import { useFetchAllProducts } from '../_hooks/products/useFetchAllProducts';

export default function Home() {
	const allProducts = useFetchAllProducts();

	return <HomeTemplate products={allProducts} />;
}
