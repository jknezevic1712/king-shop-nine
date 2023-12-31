// react-query adapter requires a Provider component that wraps our apps' children so that they can have an access to the tRPC procedures, etc.
'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { httpBatchLink } from '@trpc/react-query';
import superjson from 'superjson';
// Persist react query
import { persistQueryClient } from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

import { trpc } from './client';
import { env } from '@/env.mjs';

const getBaseUrl = () => {
	if (typeof window !== 'undefined') return ''; // browser should use relative url
	if (env.VERCEL_URL) return `https://${env.VERCEL_URL}`; // SSR should use vercel url
	return 'http://localhost:3000'; // dev SSR should use localhost
};

export default function TRPCProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 300 * 1000,
						cacheTime: 1000 * 60 * 60 * 24,
					},
				},
			})
	);
	const [trpcClient] = useState(() =>
		trpc.createClient({
			links: [
				httpBatchLink({
					url: `${getBaseUrl()}/api/trpc`,
				}),
			],
			transformer: superjson,
		})
	);

	// Persist react query / cache data
	if (typeof window !== 'undefined') {
		const localStoragePersister = createSyncStoragePersister({
			storage: window.localStorage,
		});
		persistQueryClient({
			queryClient,
			persister: localStoragePersister,
		});
	}

	return (
		<trpc.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</trpc.Provider>
	);
}
