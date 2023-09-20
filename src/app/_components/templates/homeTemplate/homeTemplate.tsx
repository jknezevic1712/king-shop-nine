'use client';

// components
import { Product } from '@/app/_types/apiResponse';
import Card from '../../molecules/card/card';
import LoadingSpinner from '../../atoms/loadingSpinner/loadingSpinner';
// store
import { useAtom } from 'jotai';
import { productsAtom } from '@/app/_store/store';

export default function HomeTemplate({
	products,
}: {
	products: Product[] | undefined;
}) {
	const [_, setAllProducts] = useAtom(productsAtom);

	if (!products)
		return (
			<div className='flex h-full w-full items-center justify-center p-24'>
				<LoadingSpinner size='lg' />
			</div>
		);

	setAllProducts(products);

	return (
		<div className='mx-auto grid h-full max-w-7xl grid-cols-1 justify-items-center gap-6 p-4 xl:grid-cols-2'>
			{products?.map((product, i) => <Card key={i} data={product} />)}
		</div>
	);
}
