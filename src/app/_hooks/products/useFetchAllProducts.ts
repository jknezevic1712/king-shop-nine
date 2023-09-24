// Utils
import { trpc } from '@/app/_trpc/client';
// Types
import { Product } from '@/app/_types/apiResponse';

/**
 * @summary hook that returns array of products using tRPC
 */
export const useFetchAllProducts = () => {
	const mockData = trpc.main.fetchMockData.useQuery().data as Product[];
	return mockData;
};
