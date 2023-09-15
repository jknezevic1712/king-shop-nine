'use client';

// Store
import { useAtomValue } from 'jotai';
import { darkModeAtom } from '@/app/_store/store';
// Font
import { Roboto } from 'next/font/google';

const font = Roboto({ weight: '400', subsets: ['latin'] });

export default function ThemeProvider({ children }: { children: JSX.Element }) {
	const darkMode = useAtomValue(darkModeAtom);

	return (
		<body className={`${font.className} ${darkMode ? 'dark' : ''}`}>
			<div className='h-full min-h-screen bg-zinc-100 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-100'>
				{children}
			</div>
		</body>
	);
}
