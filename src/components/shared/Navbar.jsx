import Image from "next/image";
import Link from "next/link";
import React from "react";
import userAvatar from "@/assets/user.png";
import NavLink from "./NavLink";

const Navbar = () => {
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

      <div className="flex justify-center items-center gap-4">
        <Image src={userAvatar} width={40} height={40} alt="Avatar" />
        <button className="btn bg-purple-600 text-white">
          <Link href={`/login`}>Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
