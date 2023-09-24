import Image from 'next/image';
// types
import { Product } from '@/app/_types/apiResponse';
// components
import CustomLink from '../../atoms/customLink/C1ustomLink';
import Button from '../../atoms/button/B1utton';
import AddToCart from '../addToCard/A1addToCart';

export default function Card({ data }: { data: Product }) {
	const { id, title, shortDescription, image, price } = data;

	return (
		<div className='group h-full w-full rounded-sm border border-secondary p-4 shadow-xl dark:border-primary md:max-w-lg lg:flex lg:max-w-xl lg:flex-col lg:justify-between lg:transition-all lg:hover:-skew-y-1'>
			<div className='card w-full rounded-sm lg:card-side'>
				<figure className='lg:w-2/5'>
					<Image
						src={image}
						alt={title}
						width={300}
						height={350}
						className='h-[350px] w-[300px] md:h-[400px] md:w-[350px] lg:h-[300px] lg:w-[250px]'
					/>
				</figure>
				<div className='card-body lg:w-3/5 lg:py-2'>
					<h2 className='card-title text-center'>{title}</h2>
					<p className='max-h-44 max-w-lg hyphens-auto py-4 text-left capitalize italic opacity-70 transition-opacity lg:max-w-none lg:text-left lg:opacity-50 lg:group-hover:opacity-100'>
						{shortDescription}
					</p>
				</div>
			</div>
			<div className='card-actions justify-between pt-8'>
				<CustomLink to={`/product/${id}`}>
					<Button className='btn btn-secondary dark:btn-primary'>
						Details
					</Button>
				</CustomLink>
				<AddToCart id={id} price={price} />
			</div>
		</div>
	);
}
