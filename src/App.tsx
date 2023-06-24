import { useState } from "react";
import "./index.css";
import Header from "./layout/Header";
import MarkDownEditor from "./features/document-editor/markdwonEditor";
import DocumentLibrary from "./features/userDocuments/DocumentLibrary";
import DocumentHeader from "./features/document-editor/document-header/DocumentHeader";

function App() {
  const [count, setCount] = useState(0);

  return (
    // {/* <DocumentSearch /> */}
    // {/* <DocumentLibrary /> */}
    <div className="flex flex-col relative h-screen">
      {/* <Header /> */}
      <DocumentHeader />
      <div className="h-full ">
        <MarkDownEditor />
      </div>
    </div>
  );
}

export default App;
