import React from "react";

const Field = ({ text }: { text?: string }) => (
  <div className="w-full p-4 rounded-lg bg-mainGreen-50 text-mainGreen-100 mb-6">
    {text}
  </div>
);

export default Field;
