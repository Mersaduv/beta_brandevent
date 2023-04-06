import { setUserText } from "@/state/feature/mySlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

interface Strings {
  message: string;
  // add any other properties here
}

const ChatResult = () => {
  const { messageData, userText } = useSelector(
    (state: { messageData: Strings[]; userText: Strings[] }) => state
  );
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-500 hidden text-white md:flex flex-col w-[30%]">
      <button
        className="flex py-3 px-3 mx-4 mt-4 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-2 flex-shrink-0 border border-white/20"
        onClick={() => {
          if (userText.length) {
            dispatch(setUserText(""));
          }
          //   setSelectedChat(null);
        }}
      >
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        New step
      </button>

      {messageData.length ? (
        <div className=" mx-4 mt-4">
          your name name : {messageData[0].message}
        </div>
      ) : (
        <h1 className="text-center">Our info</h1>
      )}
    </div>
  );
};

export default ChatResult;
