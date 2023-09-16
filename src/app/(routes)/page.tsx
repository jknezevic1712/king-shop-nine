'use client';

import { useCallback } from 'react';
// import { authOptions } from '@/server/api/auth';
// import { getServerSession } from 'next-auth/next';
import Button from '../_components/atoms/button/button';
import FormField from '../_components/molecules/formField/formField';
import HomeTemplate from '../_components/templates/homeTemplate/homeTemplate';
import { trpc } from '../_trpc/client';

export default function Home() {
	// const session = await getServerSession(authOptions);
	const mockData = trpc.main.fetchMockData.useQuery().data;

	// console.log('mockData ', mockData);

	return <HomeTemplate products={mockData} />;
}
