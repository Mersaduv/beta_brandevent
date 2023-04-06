import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage, setUserText } from "@/state/feature/mySlice";
import { RootState } from "@/state/store";

interface ChatboxProps {}

function Chatbox(props: ChatboxProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const { userText } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setUserText(event.target.value));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(sendMessage({ message: userText.trim() }));
    dispatch(setUserText(""));
    console.log(userText);
  };

  return (
    <form
      className="flex items-center relative  break-words  py-4 w-full   px-2"
      onSubmit={handleSubmit}
    >
      <textarea
        className="w-full h-12 overflow-hidden border-t-0.5 outline-none placeholder:text-gray-600 py-2.5 px-3 md:pl-4 pr-8 rounded-md shadow-custom resize-none bg-white"
        placeholder="send a message..."
        value={userText}
        onChange={handleChange}
        onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
          if (e.key === "Enter" && !e.shiftKey) {
            if (userText.trim()) {
              e.preventDefault();
              console.log(userText);
              dispatch(sendMessage({ message: userText.trim() }));
              dispatch(setUserText(""));
            }
          }
        }}
        style={{
          minHeight: "1rem",
          fontSize: "1rem",
          maxHeight: "10rem",
          lineHeight: "1.5rem",
        }}
        onInput={(e: React.FormEvent<HTMLTextAreaElement>) => {
          //shrink/grow on input logic
          const target = e.target as HTMLTextAreaElement;
          target.style.height = "auto";
          target.style.height = `${target.scrollHeight}px`;
        }}
        minLength={1}
        spellCheck={false}
        rows={1}
        aria-label="send a message..."
        tabIndex={0}
      ></textarea>

      <button
        className="absolute  text-gray-500 hover:bg-gray-600 hover:text-white rounded p-1  right-4"
        type="submit"
        disabled={loading}
      >
        {!loading && (
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 mr-1"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1={22} y1={2} x2={11} y2={13}></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        )}
      </button>
    </form>
  );
}

export default Chatbox;
