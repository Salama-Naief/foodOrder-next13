"use client";
import react from "react";

interface ItemDataProps {
  data: {
    name: string;
    label: string;
    qty: number;
  }[];
  title: string;
  selected: string;
  setSelected: Function;
}

/**items in side boxs helper component */
const SideList = ({ data, title, selected, setSelected }: ItemDataProps) => {
  return (
    <ul className="bg-gray-100 rounded p-6 font-semibold">
      <li className="py-3">{title}:</li>
      {data.map((item, index) => (
        <li
          key={index}
          onClick={() => setSelected(item.name)}
          className={`${
            selected === item.name ? "text-mainGreen-100" : "text-gray-950"
          } flex items-center justify-between py-1 cursor-pointer`}
        >
          <span>{item.label}</span>
          <span
            className={`
                      ${
                        selected === item.name
                          ? "text-mainGreen-100"
                          : "text-gray-400"
                      }`}
          >
            {item.qty}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default SideList;
