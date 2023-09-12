'use client';

import { ButtonHTMLAttributes } from 'react';

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
	btnType?: 'danger' | 'success' | 'normal';
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'wide';
}
export default function Button(props: Button) {
	const { btnType, size, children, ...otherProps } = props;

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

	function setButtonSize() {
		switch (size) {
			case 'xs':
				return 'btn-xs';
			case 'sm':
				return 'btn-sm';
			case 'lg':
				return 'btn-lg';
			case 'wide':
				return 'btn-wide';
			default:
				return 'btn-md';
		}
	}

	return (
		<button
			className={`p-1 btn text-inherit ${setButtonTypeColors()} ${setButtonSize()} text-xs md:text-sm`}
			{...otherProps}
		>
			{children}
		</button>
	);
}
