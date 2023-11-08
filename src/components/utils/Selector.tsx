import { useState } from "react";
import { BsChevronCompactDown } from "react-icons/bs";
//import { handleFilters } from "../lib/homeFilters";
import { useRouter } from "next/navigation";
interface SelectorProps {
  data: { label: string; title: string }[];
}

const Selector: React.FC<SelectorProps> = ({ data }) => {
  const [selected, setSelected] = useState("filter");
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  const handleFilter = (item: string) => {
    setSelected(item);
    setShowDropdown(false);
  };
  return (
    <div
      className="
         relative 
         bg-white p-2  
         w-32 border 
         rounded-md 
         border-gray-400
         my-6"
    >
      <div
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex 
          justify-between 
          gap-3 
          items-center 
          font-semibold
          capitalize
          text-gray-500
          cursor-pointer"
      >
        {selected}
        <BsChevronCompactDown />
      </div>
      {
        <ul
          className={`absolute 
             top-10
             bg-white 
              border  
              left-0 
              w-full 
              py-2
              rounded-md
              z-30
              transition
              duration-500
              border-gray-400
              origin-top
              ${
                showDropdown
                  ? "scale-y-100 opacity-100"
                  : "scale-y-0  opacity-0 "
              }
              `}
        >
          <li
            onClick={() => handleFilter("filter")}
            className={`py-2 cursor-pointer px-4 capitalize  ${
              selected === "filter"
                ? "bg-mainGreen-200 text-white"
                : "bg-white text-gray-600"
            }`}
          >
            Fliter
          </li>
          {data.map((item, index: number) => (
            <li
              onClick={() => handleFilter(item.title)}
              className={`py-2 cursor-pointer px-4  ${
                selected === item.title
                  ? "bg-mainGreen-200 text-white"
                  : "bg-white text-gray-600"
              }`}
              key={index}
            >
              {item.label}
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default Selector;
