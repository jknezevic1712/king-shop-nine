import Image from 'next/image';

import { Product } from '@/app/_types/apiResponse';

export default function Card({ data }: { data: Product }) {
	return (
		<div className='relative h-44 w-44'>
			<Image src={data.image} alt={data.title} fill className='rounded-md' />
		</div>
	);
}
