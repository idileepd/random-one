"use client";
import { menuItems } from "@/config";

export const Menu = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-9">
      {menuItems.map(({ icon: Icon, isSelected, name, path }, index) => {
        return (
          <div
            key={name}
            className={
              isSelected
                ? "bg-red-400 p-2 rounded-full cursor-pointer"
                : "cursor-pointer"
            }
          >
            <Icon
              width={"2rem"}
              height={"2rem"}
              color={isSelected ? "#fff" : undefined}
            />
          </div>
        );
      })}
    </div>
  );
};
