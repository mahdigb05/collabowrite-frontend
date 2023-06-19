import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

interface Props {
  value: string;
}

const MarkDownPreview = (props: Props) => {
  const { value } = props;
  return (
    <ReactMarkdown
      children={value}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      className="prose font-mono h-full px-14 py-12 w-6/12 break-words"
    />
  );
};

export default MarkDownPreview;
