import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeProps = {
  code: string;
};
export const CodeBlock = ({ code }: CodeProps) => {
  return (
    <SyntaxHighlighter language="tsx" style={oneDark} wrapLines={true}>
      {code}
    </SyntaxHighlighter>
  );
};
