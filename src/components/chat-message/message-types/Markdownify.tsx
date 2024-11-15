import React from 'react';
import Markdown from "markdown-to-jsx";

interface MarkdownifyProps {
  message: string | undefined;
}
const Markdownify: React.FC<MarkdownifyProps> = ({ message }) => (
  <div>
    <Markdown target="_blank" options={{ enforceAtxHeadings: true }}>
      {message ?? ""}
    </Markdown>
  </div>
);

export default Markdownify;
