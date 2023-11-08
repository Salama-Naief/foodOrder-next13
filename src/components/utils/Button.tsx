import React from "react";
import ReactLoading from "react-loading";

interface ButtonProps {
  title: string;
  style: string;
  loading?: boolean;
  loadingColor?: string;
}
export default function Button({
  title,
  style,
  loading,
  loadingColor,
}: ButtonProps) {
  return (
    <button
      disabled={loading}
      className={`${style} py-3 flex justify-center shadow-md shadow-gray-400  font-bold rounded-lg active:scale-95 transtion-all duration-150`}
    >
      {loading ? (
        <ReactLoading
          type="spokes"
          color={loadingColor || "#F3BA00"}
          height={28}
          width={28}
        />
      ) : (
        title
      )}
    </button>
  );
}
