const Header = () => {
  return (
    <div className="sticky top-0 z-40">
      <header className="bg-white border-b-2 py-3 px-20">
        <nav
          style={{ display: "flex", justifyContent: "space-between" }}
          className="items-center"
        >
          <a className="font-semibold text-indigo-700 text-lg">Collabowrite</a>
          <div className="flex gap-20 items-center">
            <a className="font-semibold bg-indigo-700 text-white py-2 px-4 rounded flex gap-2 items-center cursor-pointer">
              <svg
                className="w-5 h-5 inline"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <span className="text-sm">Create document</span>
            </a>
            <a className="font-semibold text-sm">Log in</a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
