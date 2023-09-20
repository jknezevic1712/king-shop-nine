import { trpc } from '@/app/_trpc/client';

export const useFetchAllProducts = () => {
	const mockData = trpc.main.fetchMockData.useQuery().data;

	return mockData;
};
