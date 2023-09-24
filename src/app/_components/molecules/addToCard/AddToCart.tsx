// components
import { BsCart2 } from 'react-icons/bs';
import Button from '../../atoms/button/Button';

type AddToCartProps = {
	id: number;
	price: number;
	className?: string;
};
export default function AddToCart({ id, price, className }: AddToCartProps) {
	return (
		<div className={`flex items-center ${className}`}>
			<span className='pr-4 font-semibold'>{`$${price}`}</span>
			<Button
				className='btn btn-secondary text-xl dark:btn-primary'
				onClick={() => console.log('Added item ', id)}
			>
				<BsCart2 />
			</Button>
		</div>
	);
}
