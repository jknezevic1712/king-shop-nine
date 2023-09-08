"use client";

import { signIn, signOut, useSession } from "next-auth/react";

import { BiCrown } from "react-icons/bi";

const Header = () => {
  function AuthButton() {
    const { data: session } = useSession();

    return session ? (
      <>
        {session?.user?.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    ) : (
      <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    );
  }

  return (
    <div className="p-4 border-b-2 flex justify-between items-center dark:border-b-zinc-100 border-b-zinc-950">
      <span className="dark:text-dark-highlight text-light-higlight text-2xl">
        <BiCrown />
      </span>
      <AuthButton />
    </div>
  );
};

export default Header;
