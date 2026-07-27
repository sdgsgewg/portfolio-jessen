import { useNavLinks } from "@/hooks/useNavLinks";
import { Link } from "@/navigation";

const Navigation = () => {
  const { navLinks } = useNavLinks();

  const renderLinks = () => {
    return navLinks.map((link) => (
      <li key={link.path} className="group">
        <Link href={link.path} className={`text-base hover:text-primary mb-3`}>
          {link.name}
        </Link>
      </li>
    ));
  };

  return (
    <nav id="nav-menu" className={`w-full px-4 mb-12 md:w-1/2`}>
      <div>
        <h3 className="font-semibold text-xl text-white mb-5">Nav Link</h3>
        <ul className="text-slate-300">{renderLinks()}</ul>
      </div>
    </nav>
  );
};

export default Navigation;
