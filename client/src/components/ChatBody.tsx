import React from "react";
import { RiQuestionnaireFill } from "react-icons/ri";
// import { useDispatch, useSelector } from "react-redux";
const ChatBody = () => {
  // const state = useSelector((state) => state);
  // const dispatch = useDispatch();
  // console.log(state.messageData, state);
  return (
    <div className="text-center ">
      <div>
        {/* talking ai  */}
        </div>

      <div className="mt-[75px] ">
        <div className=" text-center  mb-[55px]">
          <h1 className=" font-semibold text-xl mb-2">Chat Box</h1>
        </div>
        {/* Tips for participants */}
        <div>
          <div className="grid md:grid-cols-3 gap-x-3 gap-y-6  lg:gap-6 mx-2 md:mx-4">
            {/* grid one  */}
            <div className=" col-span-1 flex flex-col gap-2">
              {/* head */}
              <div className="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2 mb-2">
                <RiQuestionnaireFill className="text-3xl" />
                <h1>The intended target</h1>
              </div>
              {/* info section  */}
              <button className="w-full bg-gray-100 p-3 rounded-md hover:bg-gray-200 ">
                Explain First, the type of concert you can describe.
              </button>

              {/* info section  */}
              <button className="w-full bg-gray-100 p-3 rounded-md hover:bg-gray-200 ">
                Explain First, the type of concert you can describe.
              </button>
            </div>
            {/* grid two  */}
            <div className=" col-span-1 flex flex-col gap-2">
              {/* head */}
              <div className="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2 mb-2">
                <RiQuestionnaireFill className="text-3xl" />
                <h1>The intended target</h1>
              </div>
              {/* info section  */}
              <button className="w-full bg-gray-100 p-3 rounded-md hover:bg-gray-200 ">
                Explain First, the type of concert you can describe.
              </button>

              {/* info section  */}
              <button className="w-full bg-gray-100 p-3 rounded-md hover:bg-gray-200 ">
                Explain First, the type of concert you can describe.
              </button>
            </div>
            {/* grid three  */}
            <div className=" col-span-1 flex flex-col gap-2">
              {/* head */}
              <div className="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2 mb-2">
                <RiQuestionnaireFill className="text-3xl" />
                <h1>The intended target</h1>
              </div>
              {/* info section  */}
              <button className="w-full bg-gray-100 p-3 rounded-md hover:bg-gray-200 ">
                Explain First, the type of concert you can describe.
              </button>

              {/* info section  */}
              <button className="w-full bg-gray-100 p-3 rounded-md hover:bg-gray-200 ">
                Explain First, the type of concert you can describe.
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBody;
