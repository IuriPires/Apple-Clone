import Nav from "../components/nav";

const NAV_LINKS = [
  { href: "/store", text: "Store" },
  { href: "/mac", text: "Mac" },
  { href: "/ipad", text: "iPad" },
  { href: "/iphone", text: "iPhone" },
  { href: "/watch", text: "Watch" },
  { href: "/vision", text: "Vision" },
  { href: "/airpods", text: "AirPods" },
  { href: "/tv-and-home", text: "TV & Home" },
  { href: "/entertainment", text: "Entertainment" },
  { href: "/accessories", text: "Accessories" },
  { href: "/support", text: "Support" },
];

export default function Home() {
  return (
    <div className="w-full min-h-screen  font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col w-full h-full">
        <Nav linksList={NAV_LINKS} />
      </main>
    </div>
  );
}
