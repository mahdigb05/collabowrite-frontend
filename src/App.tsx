import { useState } from "react";
import "./index.css";
import Header from "./layout/Header";
import MarkDownEditor from "./features/document-editor/markdwonEditor";
import DocumentLibrary from "./features/userDocuments/DocumentLibrary";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen">
      <Header />
      {/* <DocumentSearch /> */}
      <DocumentLibrary />
      {/* <MarkDownEditor /> */}
    </div>
  );
}

export default App;
