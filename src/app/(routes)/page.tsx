import { authOptions } from "@/server/api/auth";
import { getServerSession } from "next-auth/next";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <>
        {session?.user?.name ? (
          <div>Welcome {session.user.name}!</div>
        ) : (
          <div>Welcome stranger!</div>
        )}
      </>
    </main>
  );
}
