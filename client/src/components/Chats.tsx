import React from "react";
import ChatResult from "./ChatResult";
import Chatbox from "./ChatBox";
import ChatBody from "./ChatBody";

const Chats = () => {
  return (
    <div className="flex md:flex-row ">
      {/* chat content  */}
      <div className=" relative   min-h-[93vh] w-full flex-col justify-between  flex flex-1 bg-gray-50">
        <div className="w-full  relative flex justify-center flex-col  items-center bg-gray-50 ">
          <ChatBody />
        </div>

        {/* input user keyboard */}
        <div className="w-full sticky bottom-0 ">
          <Chatbox />
        </div>
      </div>

      {/* output chat  */}
      <ChatResult />
    </div>
  );
};

export default Chats;
