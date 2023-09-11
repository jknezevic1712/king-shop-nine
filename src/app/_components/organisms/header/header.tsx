'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

import Logo from '../../atoms/logo/logo';
import Button from '../../atoms/button/button';
import DarkModeSwitch from '../../molecules/darkModeSwitch/darkModeSwitch';

function AuthButton() {
	const { data: session } = useSession();

	return session ? (
		<Button btnType='danger' size='sm' onClick={() => signOut()}>
			Sign out
		</Button>
	) : (
		<Button btnType='success' size='sm' onClick={() => signIn()}>
			Sign in
		</Button>
	);
}

export default function Header() {
	return (
		<div className='p-4 border-b-2 flex justify-between items-center dark:border-b-zinc-100 border-b-zinc-950'>
			<Logo />
			<DarkModeSwitch />
			<AuthButton />
		</div>
	);
}
