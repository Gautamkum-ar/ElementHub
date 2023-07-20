import { CodeBlock, dracula, CopyBlock } from "react-code-blocks";

export const Codeshare = ({ code, highlight }) => {
  return (
    <>
      <CopyBlock
        text={code}
        theme={dracula}
        language={"HTML"}
        showLineNumbers={true}
        highlight={highlight}
      />
    </>
  );
};
