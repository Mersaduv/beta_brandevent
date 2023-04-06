import React from "react";
import { NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setUserText } from "@/state/feature/mySlice";
import { RootState } from "@/state/store";

const HeaderChat = () => {
  const { userText } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  return (
    <div className="relative shadow-md">
      {/* CHAT BOX  */} {/* first mobile   New step button sticky */}
      <div className=" p-2 w-full top-0 z-10 sticky flex items-center  justify-between border-b border-white bg-gray-800  text-gray-200  md:hidden">
        <div
          onClick={() => {
            if (userText.length) {
              dispatch(setUserText(""));
            }
            //   setSelectedChat(null);
          }}
        >
          <BiMenu className="text-3xl  " />
        </div>
        <div>New step</div>

        {/* icon  */}
        <div>
          <div>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </div>
      </div>
      {/* desktop nav  */}
      <nav className="">
        <ul className="w-full  hidden md:flex   py-4 bg-gray-100">
          <li>
            <NavLink
              to="/"
              className=" text-xl py-4 px-6 bg-gray-500 text-white"
            >
              Admin Logo
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/chat-event"
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-100 text-xl font-bold  py-4 px-6 rounded-md"
                  : " bg-gray-100 text-xl  py-4 px-6 rounded-md"
              }
            >
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-100 text-xl font-bold  py-4 px-6 rounded-md"
                  : " bg-gray-100 text-xl  py-4 px-6 rounded-md"
              }
              to="/account-management"
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderChat;
