"use client";

import useErrorStore from "@/lib/store/useErrorStore";

import { Cross2Icon } from "@radix-ui/react-icons";

const ErrorBanner = () => {
  const { message, count, isError, clear } = useErrorStore();

  if (!isError) return null;

  return (
    <div className="fixed top-16 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-4 z-50 w-full">
      {/* <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-[72px]"></div> */}
      <div className="flex justify-between items-center">
        <div>
          {message} <span>({count})</span>
        </div>
        <button
          onClick={clear}
          className="text-white hover:text-gray-300 focus:outline-none text-lg"
        >
          <Cross2Icon />
        </button>
      </div>
    </div>
  );
};

export default ErrorBanner;
