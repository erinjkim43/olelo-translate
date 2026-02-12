import logo from "../assets/uhwo-logo.svg";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <a
          href="https://westoahu.hawaii.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} alt="UH West Oahu logo" className="h-12" />
        </a>
        <a
          href="https://www.hawaii.edu/access/accessible-content/webaccess/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-uhwo-red hover:text-uhwo-red-hover text-sm font-semibold transition-colors"
        >
          UH Hawaiian Language Considerations
        </a>
      </div>
    </nav>
  );
}
