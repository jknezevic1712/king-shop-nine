'use client';

// Store
import { useAtom } from 'jotai/react';
import { darkModeAtom } from '@/app/_store/store';

import ThemeIcon from '../themeIcon/themeIcon';
import Input from '../../atoms/input/input';

export default function ThemeSwitch() {
	const [darkMode, setDarkMode] = useAtom(darkModeAtom);

	return (
		<div className='inline-grid grid-cols-2 p-4'>
			<ThemeIcon />
			<ThemeIcon dark />
			<Input
				className='toggle col-span-2 col-start-1 row-start-1 bg-transparent [--b1:219_14%_80%] lg:toggle-lg checked:[--b1:215_28%_17%]'
				type='checkbox'
				checked={Boolean(darkMode)}
				onChange={() => {
					setDarkMode((prev) => !prev);
				}}
			/>
		</div>
	);
}
