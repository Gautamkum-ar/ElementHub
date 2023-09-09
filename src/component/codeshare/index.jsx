import { CopyBlock, dracula } from "react-code-blocks";

export const Codeshare = ({ code }) => {
  return (
    <div className="code__share__container">
      <CopyBlock
        text={code}
        theme={dracula}
        language={"HTML"}
        customStyle={{
          width: "90%",
          margin: "1rem auto",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      />
    </div>
  );
};
