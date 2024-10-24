import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import Nav from ".";

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

describe("", () => {
  test("Should render Nav correctly", () => {
    const { baseElement } = render(<Nav linksList={NAV_LINKS} />);

    expect(baseElement).toMatchSnapshot();
  });

  it.each(NAV_LINKS)(
    "Should display the correct text $text for each link",
    ({ text }) => {
      const { baseElement } = render(<Nav linksList={NAV_LINKS} />);
      expect(baseElement).toHaveTextContent(text);
    }
  );
});
