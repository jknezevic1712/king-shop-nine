import type { InputHTMLAttributes } from 'react';

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
	return (
		<input
			type='text'
			className='input input-bordered input-secondary dark:input-primary w-full max-w-xs'
			{...props}
		/>
	);
}
