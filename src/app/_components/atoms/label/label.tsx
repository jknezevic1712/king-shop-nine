export default function Label({
	children,
	alternate = false,
	showError = false,
}: {
	children: string;
	alternate?: boolean;
	showError?: boolean;
}) {
	return (
		<label className='label'>
			<span
				className={`${showError && 'text-error'} ${
					alternate ? 'label-text-alt' : 'label-text'
				}`}
			>
				{children}
			</span>
		</label>
	);
}
