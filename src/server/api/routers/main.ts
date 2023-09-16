import { z } from 'zod';
import { env } from '@/env.mjs';

import {
	createTRPCRouter,
	// protectedProcedure,
	publicProcedure,
} from '@/server/api/trpc';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Product } from '@/app/_types/apiResponse';

export const mainRouter = createTRPCRouter({
	hello: publicProcedure
		.input(z.object({ text: z.string() }))
		.query(({ input }) => {
			return {
				greeting: `Hello ${input.text}`,
			};
		}),

	fetchMockData: publicProcedure.query(async () => {
		const data: Product[] = await axios
			.get<Product[]>(`${env.NEXTAUTH_URL}/data.json`)
			.then((res) => res.data);

		return data;
	}),
});
