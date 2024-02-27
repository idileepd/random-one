// import Image from "next/image";
"use client";
import { SearchBar } from "@/components/SearchBar";
import { MenuBar } from "./components/MenuBar";

export default function Home() {
  return (
    <main className="grid grid-cols-[60fr_40fr] h-screen select-none">
      <div className="bg-ecru-white-100 p-3">
        <MenuBar />
        <div className="py-5 pl-5">
          <SearchBar
            onChange={(val) => {
              console.log(val);
            }}
          />
        </div>
      </div>
      <div className="bg-ecru-white-50">Part 2</div>
    </main>
  );
}
