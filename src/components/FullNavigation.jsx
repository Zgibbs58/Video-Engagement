import FullNavItem from "./FullNavItem";
import CtaBtn from "./CtaBtn";
import Logo from "./Logo";

const navLinks = [
  { name: "Home", path: "/", id: 4 },
  { name: "About", path: "/about", id: 5 },
  { name: "Portfolio", path: "/portfolio", id: 6 },
  { name: "Contact", path: "/contact", id: 7 },
];

export default function FullNavigation() {
  return (
    <div className="flex justify-between items-center px-6 sm:px-12">
      <Logo width={64} height={24} />
      <div className="flex justify-center items-center gap-8">
        {navLinks.map((i) => (
          <FullNavItem name={i.name} path={i.path} key={i.id} />
        ))}
        <CtaBtn />
      </div>
    </div>
  );
}
