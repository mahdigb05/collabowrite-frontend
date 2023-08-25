import { Textarea } from "flowbite-react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import useCrdt from "../../hooks/useCrdt";
import { DeletionRange, InsertionRange } from "types";

const MarkDownEditor = () => {
  const [content, setContent] = useState("");
  const [selectionEnd, setSelectionEnd] = useState(0);

  const { crdt, insertLocalChangeRange, deleteLocalChangeRange } = useCrdt();

  const [cursorPosition, setCursorPosition] = useState(0);

  //insertions and additions can be in ranges
  //if there is a range of deletions we should take the whole range and delete the characters from the crdt
  // if there is a range of insertions we need to get the newly added range of chars and create appropriate crdt deltas

  const handleKeyUp = (event: any) => {
    // Save the cursor position before the key is pressed
    setCursorPosition(event.target.selectionStart);
  };

  function handleChange(e: any) {
    const newText = e.target.value;
    const currentPosition = e.target.selectionStart;

    const rangeStart =
      currentPosition > selectionEnd ? selectionEnd : currentPosition;
    const rangeEnd =
      currentPosition > selectionEnd ? currentPosition : selectionEnd;

    if (newText.length < content.length) {
      //deletion
      let deletedCharacters = "";
      deletedCharacters = content.slice(rangeStart, rangeEnd);
      const deletionRange: DeletionRange = { from: rangeStart, to: rangeEnd };
      deleteLocalChangeRange(deletionRange);
    }
    if (newText.length > content.length) {
      //insertion
      let insertedCharacters = "";
      insertedCharacters = newText.slice(rangeStart, rangeEnd);
      const insertionRange: InsertionRange = {
        from: rangeStart,
        to: rangeEnd,
        str: insertedCharacters,
      };
      insertLocalChangeRange(insertionRange);
    }
    setCursorPosition(currentPosition);
    setContent(newText);
  }

  return (
    <div
      style={{ height: "calc(100vh - 80px)" }}
      className="flex flex-grow overflow-auto border
      -2 "
    >
      <div className={`w-6/12 overflow-auto border-r-2 border-gray-200 `}>
        <Textarea
          onSelect={(e) => {
            setCursorPosition(e.currentTarget.selectionStart);
            setSelectionEnd(e.currentTarget.selectionEnd);
          }}
          onKeyUp={handleKeyUp}
          onMouseUp={handleKeyUp}
          value={content}
          placeholder="type..."
          onChange={handleChange}
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
