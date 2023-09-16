import Image from 'next/image';

import { Product } from '@/app/_types/apiResponse';
import { BsCart2 } from 'react-icons/bs';

export default function Card({ data }: { data: Product }) {
	return (
		<div className='hero relative h-96'>
			<Image
				src={data.image}
				alt={data.title}
				fill
				className='absolute left-0 top-0'
			/>
			<div className='hero-overlay z-10 rounded-md bg-zinc-950 bg-opacity-50 dark:bg-zinc-100 dark:bg-opacity-50'></div>
			<div className='hero-content z-20 h-full items-end justify-center text-center text-zinc-100 dark:text-zinc-950'>
				<div className='flex max-w-md flex-col'>
					<h1 className='pb-10 text-2xl font-bold'>{data.title}</h1>
					<div className='flex items-center justify-center gap-4'>
						<button className='btn btn-primary'>
							<BsCart2 />
						</button>
						<button className='btn btn-primary'>Details</button>
					</div>
				</div>
			</div>
		</div>
	);
}
