import FullNavItem from "./FullNavItem";

const navLinks = [
  { name: "Home", path: "/", id: 4 },
  { name: "About", path: "/about", id: 5 },
  { name: "Portfolio", path: "/portfolio", id: 6 },
  { name: "Contact", path: "/contact", id: 7 },
];

export default function FullNavigation() {
  return (
    <div className="flex justify-center">
      {navLinks.map((i) => (
        <FullNavItem name={i.name} path={i.path} key={i.id} />
      ))}
    </div>
  );
}
