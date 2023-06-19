import { Textarea } from "flowbite-react";
import MarkDownPreview from "./MarkDownPreview";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
const MarkDownEditor = () => {
  const [value, setValue] = useState("");

  return (
    <div className=" flex h-full">
      <div className="w-6/12">
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="font-mono h-full resize-none rounded-none outline-none border-none w-full px-14 py-12"
        />
      </div>
      <div className="w-6/12">
        <ReactMarkdown
          children={value}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          className="font-mono h-full px-14 py-12 w-full break-words prose max-w-full"
        />
      </div>
    </div>
  );
};

export default MarkDownEditor;
