"use client";

import { NavbarLinks } from "../../constants";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import { MdClose, MdMenu, MdSearch } from "react-icons/md";
import { useState } from "react";
import Login from "@/app/login";
import Logout from "@/app/logout";

const Navbar = () => {
  const { user, error, isLoading } = useUser();
  // console.log(user);
  const [menu, setMenu] = useState(false);
  const [profile, setProfile] = useState(false);
  const [searchItems, setSearchItems] = useState("");
  const [search, setSearch] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <header>
      <nav className="flex gap-3 justify-between items-center px-[6rem] py-4 bg-white border-b border-b-gray-200 fixed w-full z-[1000] left-0 top-0 sMdesktop:px-[2rem] mobile:px-0 sMobile:px-0">
        <Link href={"/"} className="">
          {/* <Image src={Logo} alt="Logo" className="object-contain" /> */}
          <p className="text-black text-xl uppercase">
            next<span className="text-indigo-600">market</span>
          </p>
        </Link>

        <div className="sMobile:hidden">
          <form onSubmit={handleSubmit} className="input_box">
            <input
              placeholder="search for items..."
              className="input border-none outline-none"
              value={searchItems}
              onChange={(event) => setSearchItems(event.target.value)}
            />
            <MdSearch className="search_icon" />
          </form>
        </div>

        <div className="nav_search">
          {search ? (
            <MdSearch
              onClick={() => setSearch(false)}
              className="search_mobile"
            />
          ) : (
            <MdSearch
              onClick={() => setSearch(true)}
              className="search_mobile"
            />
          )}
          {search && (
            <div className="search-product slideInDown">
              <form onSubmit={handleSubmit} className="input_box">
                <input
                  placeholder="search for items..."
                  className="input"
                  value={searchItems}
                  onChange={(event) => setSearchItems(event.target.value)}
                />
                {/* <MdSearch className="search_icon" /> */}
              </form>
            </div>
          )}
        </div>

        <ul className="flex gap-12 sMdesktop:gap-4 tablet:hidden">
          {NavbarLinks.map((item) => (
            <li key={item.name}>
              <Link
                key={item.name}
                href={item.link}
                className="hover:text-indigo-600 hover:transition hover:duration-300"
              >
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
          {user && (
            <div className="tablet:hidden">
              <div className="cursor-pointer">
                {profile ? (
                  <img
                    width={28}
                    height={28}
                    src={user.picture}
                    alt={user.picture}
                    className="rounded-full ring ring-indigo-600 object-cover"
                    onClick={() => setProfile(false)}
                  />
                ) : (
                  <img
                    width={28}
                    height={28}
                    src={user.picture}
                    alt={user.picture}
                    className="rounded-full ring ring-indigo-600 object-cover focus:ring focus:ring-orange-700"
                    onClick={() => setProfile(true)}
                  />
                )}

                {profile && (
                  <div className="absolute top-[3.8rem] right-[6rem] bg-white py-4 px-8 rounded-md shadow zoomIn">
                    <p className="mb-4">{user.name}</p>
                    <p className="mb-4">{user.email}</p>
                    <Logout />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* mobile screens */}
        <div className="hidden tablet:block">
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
            <div className="slideInRight absolute top-[3rem] right-0 pr-12 bg-white flex justify-center pl-[2rem] gap-8  flex-col w-[50%] h-screen">
              <ul className="flex flex-col gap-[5rem]">
                {NavbarLinks.map((item) => (
                  <li key={item.name}>
                    <Link key={item.name} href={item.link}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-center">
                {!user && (
                  <div className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-gradient-to-tr hover:from-orange-500 hover:to-indigo-500 transition duration-300">
                    <Login />
                  </div>
                )}
              </div>
              <div className="cursor-pointer flex items-start justify-start">
                {profile ? (
                  <img
                    width={28}
                    height={28}
                    src={user.picture}
                    alt={user.picture}
                    className="rounded-full ring ring-indigo-600 object-cover"
                    onClick={() => setProfile(false)}
                  />
                ) : (
                  <img
                    width={28}
                    height={28}
                    src={user.picture}
                    alt={user.picture}
                    className="rounded-full ring ring-indigo-600 object-cover"
                    onClick={() => setProfile(true)}
                  />
                )}

                {profile && (
                  <div className="absolute top-[5rem] right-[6rem] bg-white py-4 px-8 rounded-md shadow zoomIn">
                    <p className="mb-4">{user.name}</p>
                    <p className="mb-4">{user.email}</p>
                    <Logout />
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
