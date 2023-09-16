'use client';

import { useCallback, useEffect, useState } from 'react';
// import { authOptions } from '@/server/api/auth';
// import { getServerSession } from 'next-auth/next';
import Button from '../_components/atoms/button/button';
import FormField from '../_components/molecules/formField/formField';
import HomeTemplate from '../_components/templates/homeTemplate/homeTemplate';
import { trpc } from '../_trpc/client';
import { Product } from '../_types/apiResponse';
import axios from 'axios';
import { env } from '@/env.mjs';

async function fetchMockData() {
	return await axios
		.get<Product[]>(`${env.NEXTAUTH_URL}/data.json`)
		.then((res) => res.data);
}

export default function Home() {
	// const session = await getServerSession(authOptions);
	const [data, setData] = useState([] as Product[]);
	// const mockData = trpc.main.fetchMockData.useQuery().data;

	useEffect(() => {
		// const mockData = trpc.main.fetchMockData.useQuery().data;
		fetchMockData().then((data) => setData(data));

		// setData(mockData ?? []);
	}, []);
	console.log('data ', data);

	return <HomeTemplate products={data} />;
}
