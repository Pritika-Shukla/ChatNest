import React from "react";
import logo from "../../assets/logo.png";
import Conversation from "./Conversation";
import Conversations from "./Conversations";

const SearchInput = () => {
  return (
      <><div className="sticky top-0 bg-inherit z-10">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-18 w-20" />
        <p className="font-bold text-xl text-white">ChatNest</p>
      </div>

      <div className="relative flex items-center ml-4 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
            clipRule="evenodd" />
        </svg>

        <input
          className="w-4/5 bg-transparent placeholder:text-slate-400 text-white text-sm border border-slate-200 rounded-full pl-10 pr-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Search" />

        <button
          className="rounded-md bg-zinc-900 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg hover:bg-slate-800 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
          type="button"
        >
          Search
        </button>
      </div>
      <div className="border-b-2 border-neutral-800 opacity-55"></div>
    </div><style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style></>
    
  );
};

export default SearchInput;
