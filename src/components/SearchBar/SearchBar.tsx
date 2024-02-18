"use client";
import { SearchIcon } from "@/icons";
import { debounce } from "@/utils";

interface ISearchBar {
  onChange?: (value: string) => void;
}

export const SearchBar = (props: ISearchBar) => {
  const onChange = props.onChange ? debounce(props.onChange) : null;

  return (
    <div className="flex gap-3 items-center cursor-pointer">
      <SearchIcon
        width={"1.5rem"}
        height={"1.5rem"}
        stroke={"#242a3a"}
        strokeWidth={"1.5"}
      />
      <input
        onChange={(e) => {
          const val = e.target.value;
          if (onChange) onChange(val);
        }}
        type="text"
        placeholder="Search book name, author, edition ..."
        className="py-2 w-full font-normal tracking-wider placeholder:font-medium placeholder:text-[#8a8a8a] text-blue-300 border-none bg-ecru-white-100 focus:outline-none focus:border-none"
      ></input>
    </div>
  );
};
