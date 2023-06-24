import { Textarea } from "flowbite-react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const MarkDownEditor = () => {
  const [content, setContent] = useState("");

  return (
    <div
      style={{ height: "calc(100vh - 80px)" }}
      className="flex flex-grow overflow-auto border
      -2 "
    >
      <div className={`w-6/12 overflow-auto border-r-2 border-gray-200 `}>
        <Textarea
          value={content}
          placeholder="type..."
          onChange={(e) => setContent(e.target.value)}
          className={`focus:ring-0 bg-gray-200 focus:shadow-none overflow-auto font-mono h-full resize-none rounded-none outline-none border-none w-full px-14 py-12
            }`}
        />
      </div>

      <div className="w-6/12">
        <ReactMarkdown
          children={content}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          className="font-mono h-full px-14 py-12 overflow-auto break-words prose max-w-full overflow-auto"
        />
      </div>
    </div>
  );
};

export default MarkDownEditor;
