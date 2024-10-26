"use client";

import useErrorStore from "@/lib/store/useErrorStore";

import { Cross2Icon } from "@radix-ui/react-icons";

const ErrorBanner = () => {
  const { message, count, isError, clear } = useErrorStore();

    if (!isError) return null;

    return (
      <div className="fixed top-[72px] z-50 w-full">
        {/* <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-[72px]"></div> */}
        <div className="bg-red-500 flex justify-between items-center container mx-auto max-w-screen-xl p-4 rounded-lg">
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
