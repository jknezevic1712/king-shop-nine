// Here we create tRPC client

import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@/server/api/routers";

export const trpc = createTRPCReact<AppRouter>({});
