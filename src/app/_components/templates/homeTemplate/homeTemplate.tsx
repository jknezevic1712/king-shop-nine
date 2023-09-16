import { Product } from '@/app/_types/apiResponse';
import Card from '../../molecules/card/card';

export default function HomeTemplate({
	products,
}: {
	products: Product[] | undefined;
}) {
	return (
		<div className='mx-auto grid h-full max-w-7xl grid-cols-2 justify-items-center gap-6 p-4'>
			{/* <div className=''> */}
			{products?.map((product, i) => <Card key={i} data={product} />)}
			{/* </div> */}
		</div>
	);
}
