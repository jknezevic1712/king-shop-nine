import Link from 'next/link';

import { BiCrown } from 'react-icons/bi';

export default function Logo() {
	return (
		<Link href={'/'}>
			<span className='text-3xl text-secondary dark:text-primary lg:text-4xl'>
				<BiCrown />
			</span>
		</Link>
	);
}
