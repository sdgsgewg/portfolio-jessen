export default function Nav({ isFooter }) {
  const renderLinks = () => {
      const links = [
          { href: "#home", text: "Home" },
          { href: "#about", text: "About" },
          { href: "#portfolio", text: "Portfolio" },
          { href: "#education", text: "Education" },
          { href: "#community", text: "Community" },
          { href: "#skills", text: "Skills" },
          { href: "#contact", text: "Contact" },
      ];

      return links.map((link) => (
          <li key={link.href} className="group">
              <a
                  href={link.href}
                  className={`text-base ${isFooter ? 'hover:text-primary mb-3' : 'text-dark py-2 mx-8 flex group-hover:text-primary'}`}
              >
                  {link.text}
              </a>
          </li>
      ));
  };

  return (
      <nav id="nav-menu" className={`${isFooter ? 'w-full px-4 mb-12 md:w-1/2' : 'hidden absolute top-full right-4 py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none'}`}>
          {isFooter ? (
              <div>
                  <h3 className="font-semibold text-xl text-white mb-5">Nav Link</h3>
                  <ul className="text-slate-300">
                      {renderLinks()}
                  </ul>
              </div>
          ) : (
              <ul className="block lg:flex">
                  {renderLinks()}
              </ul>
          )}
      </nav>
  );
}
