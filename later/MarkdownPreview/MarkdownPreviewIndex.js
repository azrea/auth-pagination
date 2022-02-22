import React from "react";
import ReactMarkdown from "react-markdown";
import {
  MarkdownContainer,
  PreviewContainer,
  StyledInputForm,
} from "./StyledMarkdown";

const MarkdownPreviewIndex = () => {
  const [markdown, setMarkdown] = React.useState("#Markdown Preview");

  return (
    <MarkdownContainer>
      <StyledInputForm
        value={markdown}
        onChange={(e) => {
          setMarkdown(e.target.value);
        }}
      />

      <PreviewContainer>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </PreviewContainer>
    </MarkdownContainer>
  );
};

export default MarkdownPreviewIndex;
