import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CustomButtonMenu from "./CustomButtonMenu/CustomButtonMenu";
import ProfileImages from "./store/ProfileImages";
import CustomWallteButton from "./CustomButtonMenu/CustomWallteButton";
import CustomPhoneMenu from "./CustomPhoneMenu/CustomPhoneMenu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showWallet, setShowWallet] = useState(false);
  const [showCallMenu, setShowCallMenu] = useState(false);

  return (
    <nav className="border bg-slate-50 rounded">
      <div className="flex flex-row justify-between ml-10 mr-10">
        <div>
          <NavLink className=" text-2xl font-serif md:text-4xl" to="/">
            Alenas Logo!
          </NavLink>
          <p className="text-xs font-sans md:text-sm">
            world's most famous brand
          </p>
        </div>
        <ul className="hidden md:flex flex-row font-sans">
          <div className=" flex justify-end gap-4 mt-2 lg:gap-8 xl:gap-10">
            <NavLink to="/summer">
              <button className=" hover:bg-gray-100 py-1 md:py-2">
                Summer
              </button>
            </NavLink>
            <NavLink to="/autumn">
              <button className=" hover:bg-gray-100 py-1 md:py-2">
                Autumn
              </button>
            </NavLink>
            <NavLink to="/winter">
              <button className=" hover:bg-gray-100 py-1 md:py-2">
                Winter
              </button>
            </NavLink>
            <NavLink to="/spring">
              <button className=" hover:bg-gray-100 py-1 md:py-2">
                Spring
              </button>
            </NavLink>
          </div>
        </ul>

        <div className="gap-5 flex flex-row md:gap-10 justify-end">
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className="hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </button>
          <button
            onClick={() => setShowWallet((prev) => !prev)}
            className="hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
              />
            </svg>
          </button>
          <button
            onClick={() => setShowCallMenu(true)}
            className="hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          </button>
        </div>
      </div>
      {showMenu && <CustomButtonMenu text="My Profile" image={ProfileImages} />}
      {showWallet && <CustomWallteButton />}
      {showCallMenu && <CustomPhoneMenu setShowCallMenu={setShowCallMenu} />}
    </nav>
  );
};

export default Navbar;
