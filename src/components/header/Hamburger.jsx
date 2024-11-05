export default function Hamburger() {
  return (
    <button
      id="hamburger"
      name="burger"
      type="button"
      className="block absolute right-4 lg:hidden"
    >
      <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
      <span className="hamburger-line transition duration-300 ease-in-out"></span>
      <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
    </button>
  );
}
