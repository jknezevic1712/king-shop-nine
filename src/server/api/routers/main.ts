import { z } from 'zod';
import { env } from '@/env.mjs';
import axios from 'axios';

import {
	createTRPCRouter,
	// protectedProcedure,
	publicProcedure,
} from '@/server/api/trpc';
import { Product } from '@/app/_types/apiResponse';
import { TRPCError } from '@trpc/server';

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
			.then((res) => res.data)
			.catch((err) => {
				throw new TRPCError({
					code: 'BAD_REQUEST',
					cause: `${err}`,
					message: 'Fetching mock data failed!',
				});
			});

		return data;
	}),
});
