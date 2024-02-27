import BookIcon from "@/icons/BookIcon";
import { Menu } from "./Menu";
import { MenuIcon } from "@/icons";
import { SearchBar } from "@/components/SearchBar";

export const MenuBar = () => {
  return (
    <div className="grid grid-cols-[auto_auto_1fr] gap-1 h-full">
      <div className="flex flex-col px-3 justify-between items-center">
        <BookIcon width={"2.7rem"} height={"2.7rem"} />
        <Menu />
        <div className="bg-ecru-white-50 p-2 rounded-full cursor-pointer w-max">
          <MenuIcon width={"2rem"} height={"2rem"} />
        </div>
      </div>
      <div className="border-l-ecru-white-200 border-l-1 my-9"></div>
    </div>
  );
};
