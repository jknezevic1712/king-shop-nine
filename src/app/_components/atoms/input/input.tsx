import type { ChangeEvent, InputHTMLAttributes } from 'react';

interface Input<T> extends InputHTMLAttributes<HTMLInputElement> {
	data: T;
	setData: (e: ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
}
export default function Input<
	T extends string | number | readonly string[] | undefined
>(props: Input<T>) {
	const { data, setData, ...otherProps } = props;

	return (
		<input
			type='text'
			className='input input-bordered input-secondary dark:input-primary w-full max-w-xs'
			value={data}
			onChange={setData}
			{...otherProps}
		/>
	);
}
