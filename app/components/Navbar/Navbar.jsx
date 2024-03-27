"use client";
import Logo from "../../../public/assets/Logo.png";
import Image from "next/image";
import { NavbarLinks } from "../../constants";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import { MdClose, MdMenu } from "react-icons/md";
import { useState } from "react";
import Login from "@/app/login";

const Navbar = () => {
  const { user, error, isLoading } = useUser();
  const [menu, setMenu] = useState(false);

  return (
    <header>
      <nav className="flex justify-between items-center px-[6rem] py-[0.6rem] bg-white border-b border-b-gray-200 fixed w-full z-[1000] left-0 top-0">
        <Link href={"/"} className="w-[80px]">
          <Image src={Logo} alt="Logo" className="object-cover" />
        </Link>

        <div className="search-product">
          <form className="input_box">
            <input placeholder="search for items..." />
          </form>
        </div>

        <ul className="flex gap-12">
          {NavbarLinks.map((item) => (
            <li key={item.name}>
              <Link key={item.name} href={item.link}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="user">
          {!user && (
            <div className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-gradient-to-tr hover:from-orange-500 hover:to-indigo-500 transition duration-300">
              <Login />
            </div>
          )}
        </div>

        <div className="menu-bar">
          {menu ? (
            <MdClose
              onClick={() => setMenu(false)}
              size={24}
              cursor={"pointer"}
            />
          ) : (
            <MdMenu
              onClick={() => setMenu(true)}
              size={24}
              cursor={"pointer"}
            />
          )}

          {menu && (
            <div className="responsive">
              <ul className="">
                {NavbarLinks.map((item) => (
                  <li key={item.name}>
                    <Link key={item.name} href={item.link}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="user">
                {!user && (
                  <div className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-gradient-to-tr hover:from-orange-500 hover:to-indigo-500 transition duration-300">
                    <Login />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
