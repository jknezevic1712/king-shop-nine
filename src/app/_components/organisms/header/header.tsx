import Logo from '../../atoms/logo/logo';
import DarkModeSwitch from '../../molecules/darkModeSwitch/darkModeSwitch';
import Auth from '../../molecules/auth/auth';

export default function Header() {
	return (
		<div className='p-4 border-b-2 flex justify-between items-center dark:border-b-zinc-100 border-b-zinc-950'>
			<Logo />
			<div className='flex items-center gap-8'>
				<DarkModeSwitch />
				<Auth />
			</div>
		</div>
	);
}
