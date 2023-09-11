'use client';

import { ButtonHTMLAttributes } from 'react';

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: string | JSX.Element;
	btnType?: 'danger' | 'success' | 'normal';
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'wide';
	onClick?: (args?: any) => void;
}
export default function Button({
	children,
	btnType = 'normal',
	size = 'md',
	onClick,
}: Button) {
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
			onClick={onClick}
		>
			{children}
		</button>
	);
}
