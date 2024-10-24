import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import NavLink from "./nav-link";

interface Link {
  text: string;
  href: string;
}

interface NavProps {
  linksList: Link[];
}

export default function Nav({ linksList }: NavProps) {
  return (
    <nav className="w-full flex gap-5 items-center bg-[#161617CC] px-3 py-3 justify-between lg:justify-center">
      <span className="pr-3 cursor-pointer">
        <FaApple color="white" className="text-lg" />
      </span>

      <div className="gap-5 items-center hidden lg:flex  lg:visible lg:justify-center">
        {linksList.map((link) => (
          <NavLink key={link.href} href={link.href}>
            {link.text}
          </NavLink>
        ))}
      </div>

      <div className="flex gap-3 items-center">
        <span className="pl-3 cursor-pointer">
          <CiSearch
            strokeWidth={1.1}
            className="text-lg text-slate-200 hover:text-white"
          />
        </span>
        <span className="pl-3 cursor-pointer">
          <IoBagOutline
            strokeWidth={1.1}
            className="text-lg text-slate-200 hover:text-white"
          />
        </span>
        <span className="pl-3 lg:hidden cursor-pointer">
          <RxHamburgerMenu className="text-lg text-slate-200 hover:text-white" />
        </span>
      </div>
    </nav>
  );
}
