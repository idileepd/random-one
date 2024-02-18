import {
  BookmarkIcon,
  HomeIcon,
  NotesIcon,
  SearchIcon,
  SettingsIcon,
} from "@/icons";
import BookIcon from "@/icons/BookIcon";

export const menuItems = [
  {
    path: "/",
    name: "Home",
    isSelected: true,
    icon: HomeIcon,
  },
  {
    path: "/saved-books",
    name: "Saved Books",
    isSelected: false,
    icon: BookIcon,
  },
  {
    path: "/notes",
    name: "Notes",
    isSelected: false,
    icon: NotesIcon,
  },
  {
    path: "/bookmarks",
    name: "Bookmarks",
    isSelected: false,
    icon: BookmarkIcon,
  },
  {
    path: "/settings",
    name: "Settings",
    isSelected: false,
    icon: SettingsIcon,
  },
];
