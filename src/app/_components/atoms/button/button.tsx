'use client';

import { ButtonHTMLAttributes } from 'react';

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
	btnType?: 'danger' | 'success' | 'normal';
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'wide';
}
export default function Button(props: Button) {
	const { btnType = 'normal', size = 'md', children, ...otherProps } = props;

	function setButtonTypeColors() {
		switch (btnType) {
			case 'success':
				return 'btn-accent';
			case 'danger':
				return 'btn-error hover:bg-opacity-80 hover:border-opacity-80';
			default:
				return 'dark:btn-primary btn-secondary';
		}
	}

	return (
		<button
			className={`m-1 btn text-inherit btn-${size} ${setButtonTypeColors()} text-xs md:text-sm`}
			{...otherProps}
		>
			{children}
		</button>
	);
}
