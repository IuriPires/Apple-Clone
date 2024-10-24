import Nav from "../components/nav";
import Button from "../components/button";

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

        <div className="mt-4 w-full flex gap-4 justify-center">
          <Button>Learn more</Button>
          <Button outline>Buy</Button>
        </div>
        <p className="text-sm text-center mt-3 text-slate-600">
          Apple Intelligence coming this fall
        </p>
      </main>
    </div>
  );
}
