'use client';

import { useState } from 'react';
import Label from '../../atoms/label/label';
import Input from '../../atoms/input/input';

export default function FormField({
	label,
	type = 'text',
}: {
	label: string;
	type?: 'text' | 'checkbox';
}) {
	const [data, setData] = useState('');

	return (
		<div className='form-control w-full max-w-xs'>
			<Label>{label}</Label>
			<Input
				type={type}
				value={data}
				onChange={(e) => setData(e.target.value)}
			/>
			<Label alternate showError>
				&#42;Required
			</Label>
		</div>
	);
}
