'use client';

import { Roboto } from 'next/font/google';

import useAppStore from '@/app/_store/store';

const font = Roboto({ weight: '400', subsets: ['latin'] });

export default function ThemeWrapper({ children }: { children: JSX.Element }) {
	const darkMode = useAppStore((state) => state.utils.darkMode);

	return (
		<body className={`${font.className} ${darkMode ? 'dark' : ''}`}>
			<div className='min-h-screen h-full bg-zinc-100 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-100'>
				{children}
			</div>
		</body>
	);
}
