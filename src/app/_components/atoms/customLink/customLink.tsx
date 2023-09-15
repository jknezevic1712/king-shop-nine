import Link from 'next/link';

interface CustomLinkProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	children: React.ReactNode;
	to: string;
	prefetch?: boolean;
}
export default function CustomLink(props: CustomLinkProps) {
	const { children, to, ...otherProps } = props;

	return (
		<Link
			className='link-hover link-secondary dark:link-primary'
			href={to}
			{...otherProps}
		>
			{children}
		</Link>
	);
}
