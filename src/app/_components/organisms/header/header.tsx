import Logo from '../../atoms/logo/logo';
import ThemeSwitch from '../../molecules/themeSwitch/themeSwitch';
import Auth from '../../molecules/auth/auth';

export default function Header() {
	return (
		<div className='p-4 border-b-2 flex justify-between items-center dark:border-b-zinc-100 border-b-zinc-950'>
			<Logo />
			<div className='flex items-center gap-8'>
				<ThemeSwitch />
				<Auth />
			</div>
		</div>
	);
}
