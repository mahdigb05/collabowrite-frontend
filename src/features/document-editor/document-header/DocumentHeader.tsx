import TitleInput from "./TitleInput";

const DocumentHeader = () => {
  return (
    <header className="flex px-8 py-4 justify-between">
      <div className="flex gap-10 items-center w-6/12">
        <a className="rounded-3xl bg-gray-200 p-3">
          <svg
            className="w-5 h-5 text-gray-600 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
        </a>
        <div className="flex-grow">
          <TitleInput title={"Hey there"} />
          <div className="flex text-sm text-gray-800 gap-4">
            <p>26 Feb 2023</p>
            <p className="text-gray-800 text-sm">&#x2022;</p>
            <p>John Doe</p>
          </div>
        </div>
      </div>
      <div>
        <button className="bg-transparent border-indigo-700 ring-indigo-700 hover:bg-indigo-700 hover:text-white py-2 px-5 border-2 rounded-lg text-purple-700 font-medium">
          Share
        </button>
      </div>
    </header>
  );
};

export default DocumentHeader;
