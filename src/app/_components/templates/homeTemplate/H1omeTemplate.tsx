// components
import { Product } from '@/app/_types/apiResponse';
import Card from '../../molecules/card/C1ard';

export default function HomeTemplate({
	products,
}: {
	products: Product[] | undefined;
}) {
	return (
		<div className='mx-auto grid h-full max-w-7xl grid-cols-1 justify-items-center gap-6 p-4 xl:grid-cols-2'>
			{products?.map((product, i) => <Card key={i} data={product} />)}
		</div>
	);
}
