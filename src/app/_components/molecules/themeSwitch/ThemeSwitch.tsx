'use client';

// Store
import { useAtom } from 'jotai/react';
import { themeModeAtom } from '@/app/_store/store';
// Components
import ThemeIcon from '../themeIcon/ThemeIcon';
import Input from '../../atoms/input/Input';
// Hooks
import useThemeModeValue from '@/app/_hooks/theme/useThemeModeValue';

export default function ThemeSwitch() {
	const [themeMode, setDarkMode] = useAtom(themeModeAtom);
	const currentTheme = useThemeModeValue(themeMode);

	return (
		<div className='inline-grid grid-cols-2 p-4'>
			<ThemeIcon />
			<ThemeIcon dark />
			<Input
				className='toggle col-span-2 col-start-1 row-start-1 bg-transparent [--b1:219_14%_80%] lg:toggle-lg checked:[--b1:215_28%_17%]'
				type='checkbox'
				checked={currentTheme}
				onChange={() => {
					setDarkMode(!currentTheme ? 'dark' : 'light');
				}}
			/>
		</div>
	);
}
