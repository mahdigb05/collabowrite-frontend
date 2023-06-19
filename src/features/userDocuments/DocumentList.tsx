import { DocumentReference } from "types";

interface Props {
  documents: DocumentReference[];
}

const DocumentList = (props: Props) => {
  const { documents } = props;

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {documents.map((document) => (
        <li key={document.id} className="flex justify-between gap-x-6 py-5">
          <div className="min-w-0 flex-auto">
            <p className="text-sm  leading-6 text-black">{document.title}</p>
            <div className="flex gap-2">
              <p className="mt-1 truncate text-xs leading-5 text-gray-600">
                {document.creationDate}
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-600">
                &#x2022;
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-600">
                {document.owner.username}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default DocumentList;
