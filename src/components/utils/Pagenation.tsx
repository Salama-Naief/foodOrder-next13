"client";
import React, { useState } from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

interface Props {
  prev: number | null;
  page: number;
  next: number | null;
}
export default function Pagenation() {
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const pagenation: Props[] = [
    { prev: null, page: 1, next: 2 },
    { prev: 1, page: 2, next: 3 },
    { prev: 2, page: 3, next: 4 },
    { prev: 4, page: 5, next: 6 },
    { prev: 5, page: 6, next: null },
  ];

  console.log("currentPageIndex", pagenation[currentPageIndex]);
  return (
    <div className="flex justify-center space-x-4 items-center bg-gray-100 py-1 my-6">
      <button
        onClick={() =>
          setCurrentPageIndex(
            currentPageIndex - 1 > 0 ? currentPageIndex - 1 : 0
          )
        }
        disabled={pagenation[currentPageIndex].prev ? false : true}
        className="hover:text-mainGreen-100 flex items-center transition-all duration-150"
      >
        <BsChevronDoubleLeft /> prev
      </button>
      {pagenation.map((item, index) => (
        <button
          key={index}
          className={`
  ${
    pagenation[currentPageIndex].page === item.page
      ? "bg-mainGreen-100 text-white"
      : "border border-gray-300"
  }
py-1 px-2 md:px-3 lg:py-2 lg:px-5 rounded font-semibold transition-all
   duration-200 ease-in-out hover:bg-mainGreen-100 hover:text-white
  `}
          onClick={() => setCurrentPageIndex(index)}
        >
          {item.page}
        </button>
      ))}

      <button
        disabled={pagenation[currentPageIndex].next ? false : true}
        onClick={() =>
          setCurrentPageIndex(
            currentPageIndex + 1 < pagenation.length
              ? currentPageIndex + 1
              : pagenation.length
          )
        }
        className="hover:text-mainGreen-100 flex items-center transition-all duration-150"
      >
        <span>next</span>
        <BsChevronDoubleRight />
      </button>
    </div>
  );
}
