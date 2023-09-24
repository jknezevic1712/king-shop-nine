import Logo from '../../atoms/logo/L1ogo';
import ThemeSwitch from '../../molecules/themeSwitch/T1hemeSwitch';
import Auth from '../../molecules/auth/A1uth';

export default function Header() {
	return (
		<div className='flex items-center justify-between border-b-2 border-b-zinc-950 p-4 dark:border-b-zinc-100'>
			<Logo />
			<div className='flex items-center gap-2'>
				<ThemeSwitch />
				<Auth />
			</div>
		</div>
	);
}
