import Link from 'next/link';

import { BiCrown } from 'react-icons/bi';

export default function Logo() {
	return (
		<Link href={'/'}>
			<span className='dark:text-primary text-secondary text-3xl'>
				<BiCrown />
			</span>
		</Link>
	);
}
