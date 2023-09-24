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
				return 'btn-sm px-3 lg:btn-md lg:h-10 lg:min-h-fit';
			case 'lg':
				return 'btn-lg';
			case 'wide':
				return 'btn-wide';
			default:
				return 'btn-md h-10 min-h-fit';
		}
	}

	return (
		<button
			className={`btn p-1 text-inherit ${setButtonTypeColors()} ${setButtonSize()} text-xs lg:text-sm`}
			{...otherProps}
		>
			{children}
		</button>
	);
}
