'use client';

type LoadingSpinnerProps = {
	size: 'sm' | 'md' | 'lg';
};
export default function LoadingSpinner(props: LoadingSpinnerProps) {
	const { size } = props;

	function setSize() {
		switch (size) {
			case 'sm':
				return 'w-6';
			case 'md':
				return 'w-10';
			case 'lg':
				return 'w-14';
			default:
				return 'w-6';
		}
	}

	return (
		<span
			className={`loading loading-spinner text-secondary dark:text-primary ${setSize()}`}
		></span>
	);
}
