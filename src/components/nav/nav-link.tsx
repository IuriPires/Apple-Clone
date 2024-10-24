import type { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      className="font-light text-sm text-slate-200 hover:text-white transition-all"
      href={href}
    >
      {children}
    </a>
  );
}
