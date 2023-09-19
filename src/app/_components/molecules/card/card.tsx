import Image from 'next/image';

import { Product } from '@/app/_types/apiResponse';
import { BsCart2 } from 'react-icons/bs';

export default function Card({ data }: { data: Product }) {
	return (
		<div className='group h-full w-full rounded-sm border border-secondary p-4 shadow-xl dark:border-primary md:max-w-lg lg:flex lg:max-w-xl lg:flex-col lg:justify-between lg:transition-all lg:hover:-skew-y-1'>
			<div className='card w-full rounded-sm lg:card-side'>
				<figure className='lg:w-2/5'>
					<Image
						src={data.image}
						alt={data.title}
						width={300}
						height={350}
						className='h-[350px] w-[300px] md:h-[400px] md:w-[350px] lg:h-[300px] lg:w-[250px]'
					/>
				</figure>
				<div className='card-body lg:w-3/5 lg:py-2'>
					<h2 className='card-title text-center'>{data.title}</h2>
					<p className='max-h-44 max-w-lg hyphens-auto py-4 text-left capitalize italic opacity-70 transition-all lg:max-w-none lg:text-left lg:opacity-50 lg:group-hover:opacity-100'>
						{data.shortDescription}
					</p>
				</div>
			</div>
			<div className='card-actions justify-between pt-8'>
				<button className='btn btn-secondary dark:btn-primary'>Details</button>
				<div className='flex items-center'>
					<span className='pr-4 font-semibold'>{`$${data.price}`}</span>
					<button className='btn btn-secondary text-xl dark:btn-primary'>
						<BsCart2 />
					</button>
				</div>
			</div>
		</div>
	);
}
