'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

import Button from '../../atoms/button/Button';

export default function Auth() {
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
