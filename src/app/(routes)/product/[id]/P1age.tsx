'use client';

// components
import Image from 'next/image';
import LoadingSpinner from '@/app/_components/atoms/loadingSpinner/L1oadingSpinner';
import { useFetchProductWithID } from '@/app/_hooks/products/useFetchProductWithID';
import AddToCart from '@/app/_components/molecules/addToCard/A1addToCart';
import ProductRating from '@/app/_components/molecules/productRating/P1roductRating';

export default function ProductDetails({ params }: { params: { id: string } }) {
	const productWithID = useFetchProductWithID(params.id);

	if (!productWithID)
		return (
			<div className='flex h-full w-full items-center justify-center p-24'>
				<LoadingSpinner size='lg' />
			</div>
		);

	const {
		id,
		title,
		description,
		category,
		subcategory,
		image,
		price,
		rating,
		dateAdded,
	} = productWithID;

	return (
		<div className='mx-auto flex max-w-7xl flex-col gap-12 px-8 py-4'>
			<h1 className='w-full text-center text-3xl font-bold'>{title}</h1>
			<div className='flex h-full flex-col items-center justify-start gap-6 lg:flex-row lg:items-start lg:justify-center'>
				<Image
					src={image}
					alt={title}
					height={350}
					width={300}
					className='h-[450px] w-[300px] rounded-sm lg:h-[500px] lg:w-[350px]'
				/>
				<p className='italic leading-relaxed'>{description}</p>
			</div>
			<div className='flex items-center justify-between'>
				<ProductRating rating={rating} />
				<AddToCart id={id} price={price} className='justify-end' />
			</div>
		</div>
	);
}
