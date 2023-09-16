import { Product } from '@/app/_types/apiResponse';
import Card from '../../molecules/card/card';
import LoadingSpinner from '../../atoms/loadingSpinner/loadingSpinner';

export default function HomeTemplate({
	products,
}: {
	products: Product[] | undefined;
}) {
	if (!products)
		return (
			<div className='flex h-full w-full items-center justify-center p-24'>
				<LoadingSpinner size='lg' />
			</div>
		);

	return (
		<div className='mx-auto grid h-full max-w-7xl grid-cols-1 justify-items-center gap-6 p-4'>
			{products?.map((product, i) => <Card key={i} data={product} />)}
		</div>
	);
}
