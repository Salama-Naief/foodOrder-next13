import React from "react";

interface Props {
  children: React.ReactNode;
  setCloseOverlay: Function;
}
export default function Overlay({ children, setCloseOverlay }: Props) {
  return (
    <div className="fixed top-0 z-20 left-0 flex justify-center items-center w-full h-screen ">
      <div className="relative z-40 h-fit mx-auto w-full px-4 md:px-0  md:w-2/3 lg:w-1/2">
        {children}
      </div>
      <div
        onClick={() => setCloseOverlay(false)}
        className="absolute top-0 z-30  left-0 w-full h-screen opacity-25 bg-black"
      ></div>
    </div>
  );
}
