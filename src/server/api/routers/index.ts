// Here we created an instance of an appRouter and here we add any functions we want

import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import { publicProcedure, createTRPCRouter } from "../trpc";
import z from "zod";

import { mainRouter } from "./main";

export const appRouter = createTRPCRouter({ main: mainRouter });

export type AppRouter = typeof appRouter;

/**
 * Inference helper for inputs.
 *
 * @example type HelloInput = RouterInputs['example']['hello']
 */
export type RouterInputs = inferRouterInputs<AppRouter>;

/**
 * Inference helper for outputs.
 *
 * @example type HelloOutput = RouterOutputs['example']['hello']
 */
export type RouterOutputs = inferRouterOutputs<AppRouter>;
