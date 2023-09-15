// import { authOptions } from '@/server/api/auth';
// import { getServerSession } from 'next-auth/next';
import Button from '../_components/atoms/button/button';
import FormField from '../_components/molecules/formField/formField';
import HomeTemplate from '../_components/templates/homeTemplate/homeTemplate';

export default async function Home() {
	// const session = await getServerSession(authOptions);

	return <HomeTemplate />;
}
