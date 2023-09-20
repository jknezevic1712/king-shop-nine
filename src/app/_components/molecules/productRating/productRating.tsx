// import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

type ProductRatingProps = {
	rating: {
		rate: number;
		count: number;
	};
};
export default function ProductRating({ rating }: ProductRatingProps) {
	// const [rate, setRate] = useState(0);
	const roundedRate = Math.round(rating.rate);

	function setStarColor(starNumber: number) {
		return starNumber < roundedRate || starNumber === roundedRate
			? 'text-secondary dark:text-primary'
			: 'text-zinc-100';
	}

	return (
		<div className='flex flex-col items-start justify-center gap-2'>
			<div className='flex items-center justify-center text-2xl'>
				{[...Array(5)].map((_, idx) => {
					const starNumber = idx + 1;

					return (
						<label key={idx}>
							<input
								className='hidden'
								type='radio'
								value={roundedRate}
								// value={starNumber}
								// onClick={() => {
								// 	setRate(starNumber);
								// }}
							/>
							<div className={`${setStarColor(starNumber)}`}>
								<FaStar />
							</div>
						</label>
					);
				})}
			</div>
			<p>{rating.count} votes</p>
		</div>
	);
}
