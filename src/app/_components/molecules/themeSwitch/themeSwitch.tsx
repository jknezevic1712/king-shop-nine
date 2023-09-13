'use client';

import ThemeIcon from '../themeIcon/themeIcon';
import Input from '../../atoms/input/input';
import useAppStore from '@/app/_store/store';

export default function ThemeSwitch() {
	const { darkMode, changeTheme } = useAppStore((state) => state.utils);

	return (
		<div className='inline-grid grid-cols-2 p-4'>
			<ThemeIcon />
			<ThemeIcon dark />
			<Input
				className='toggle col-span-2 col-start-1 row-start-1 bg-transparent [--b1:219_14%_80%] lg:toggle-lg checked:[--b1:215_28%_17%]'
				type='checkbox'
				defaultChecked={darkMode}
				onChange={() => changeTheme()}
			/>
		</div>
	);
}
