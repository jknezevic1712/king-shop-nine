import ThemeIcon from '../themeIcon/themeIcon';
import Input from '../../atoms/input/input';

export default function DarkModeSwitch() {
	return (
		<div className='m-4 inline-grid grid-cols-2'>
			<ThemeIcon />
			<ThemeIcon dark />
			<Input
				className='toggle bg-transparent col-start-1 row-start-1 col-span-2 [--b1:219_14%_80%] checked:[--b1:215_28%_17%]'
				type='checkbox'
			/>
		</div>
	);
}
