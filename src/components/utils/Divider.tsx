import React from "react";

export default function Divider({ style }: { style?: string }) {
  return (
    <div className={`w-full h-px ${style ? style : "bg-gray-200"}  my-4`}></div>
  );
}
