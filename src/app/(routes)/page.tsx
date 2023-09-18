'use client';

import HomeTemplate from '../_components/templates/homeTemplate/homeTemplate';
import { trpc } from '../_trpc/client';

export default function Home() {
	const mockData = trpc.main.fetchMockData.useQuery().data;

	return <HomeTemplate products={mockData} />;
}
