"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import userAvatar from "@/assets/user.png";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  console.log(user, isPending, "user");
  return (
    <div className=" container mx-auto flex justify-between mt-10">
      <div></div>
      <ul className="flex justify-center items-center gap-5 text-gray-700">
        <li>
          <NavLink href={`/`}>Home</NavLink>
        </li>
        <li>
          <NavLink href={`/about`}>About</NavLink>
        </li>
        <li>
          <NavLink href={`/career`} className={"text-yellow-500"}>
            Career
          </NavLink>
        </li>
      </ul>

      {isPending ? (
        <span className="loading loading-spinner text-error"></span>
      ) : user ? (
        <div className="flex justify-center items-center gap-4">
          <h2 className="text-[14px] text-black">Hello, {user.name}</h2>
          <Image
            src={user.image || userAvatar}
            width={40}
            height={40}
            alt="Avatar"
            className="border border-purple-300 rounded-full"
          />
          <button
            className="btn bg-pink-600 text-white"
            onClick={async () => await authClient.signOut()}
          >
            Logout
          </button>
        </div>
      ) : (
        <button className="btn bg-purple-600 text-white">
          <Link href={`/login`}>Login</Link>
        </button>
      )}
    </div>
  );
};

export default Navbar;
