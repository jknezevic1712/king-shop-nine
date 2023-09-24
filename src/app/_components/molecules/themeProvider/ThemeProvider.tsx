'use client';

// Store
import { useAtomValue } from 'jotai';
import { themeModeAtom } from '@/app/_store/store';
// Font
import { Roboto } from 'next/font/google';
// Hooks
import useThemeModeValue from '@/app/_hooks/theme/useThemeModeValue';

const font = Roboto({ weight: '400', subsets: ['latin'] });

export default function ThemeProvider({ children }: { children: JSX.Element }) {
	const themeMode = useAtomValue(themeModeAtom);
	const currentTheme = useThemeModeValue(themeMode);

	return (
		<body className={`${font.className} ${currentTheme ? 'dark' : ''}`}>
			<div className='h-full min-h-screen bg-zinc-100 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-100'>
				{children}
			</div>
		</body>
	);
}
