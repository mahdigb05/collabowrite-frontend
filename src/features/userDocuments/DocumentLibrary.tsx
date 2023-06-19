import { TextInput } from "flowbite-react";
import { DocumentReference } from "types";
import DocumentList from "./DocumentList";

const documents: DocumentReference[] = [
  {
    id: "sdjf-5sd",
    title: "Collaborwrite API documentation",
    owner: {
      username: "john doe",
      email: "johndoe@gmail.com",
    },
    creationDate: "27 Feb 2023",
  },
  {
    id: "sdjf-5sd",
    title: "Collaborwrite API documentation",
    owner: {
      username: "john doe",
      email: "johndoe@gmail.com",
    },
    creationDate: "27 Feb 2023",
  },
  {
    id: "sdjf-5sd",
    title: "Collaborwrite API documentation",
    owner: {
      username: "john doe",
      email: "johndoe@gmail.com",
    },
    creationDate: "27 Feb 2023",
  },
  {
    id: "sdjf-5sd",
    title: "Collabowrite Budget planning for 2024",
    owner: {
      username: "john doe",
      email: "johndoe@gmail.com",
    },
    creationDate: "27 Feb 2023",
  },
  {
    id: "sdjf-5sd",
    title: "Collaborwrite API documentation",
    owner: {
      username: "john doe",
      email: "johndoe@gmail.com",
    },
    creationDate: "27 Feb 2023",
  },
  {
    id: "sdjf-5sd",
    title: "Collaborwrite API documentation",
    owner: {
      username: "john doe",
      email: "johndoe@gmail.com",
    },
    creationDate: "27 Feb 2023",
  },
];

const SearchIcon = () => (
  <svg
    fill="none"
    className="w-4 h-4"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    />
  </svg>
);

const DocumentLibrary = () => {
  return (
    <div className="flex flex-col max-w-screen-xl m-auto items-center">
      <div className="my-14 w-1/2">
        <TextInput
          icon={SearchIcon}
          className="w-full"
          id="email1"
          placeholder="document title, owner name, shared with..."
          type="text"
        />
      </div>
      <div className="flex gap-32">
        <div>
          <div className="flex gap-3 items-center">
            <svg
              className="w-4 h-4 inline-block text-indigo-700"
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
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="font-semibold">Recently accessed</span>
          </div>
          <DocumentList documents={documents} />
        </div>
        <div>
          <div className="flex gap-3 items-center">
            <svg
              className="w-4 h-4 inline-block text-indigo-700"
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
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            <span className="font-semibold">Owned documents</span>
          </div>
          <DocumentList documents={documents} />
        </div>
        <div>
          <div className="flex gap-3 items-center">
            <svg
              className="w-4 h-4 inline-block text-indigo-700"
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
                d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
              />
            </svg>
            <span className="font-semibold">Shared documents</span>
          </div>
          <DocumentList documents={documents} />
        </div>
      </div>
    </div>
  );
};

export default DocumentLibrary;
