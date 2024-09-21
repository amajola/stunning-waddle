import React from "react";

interface MarkdownTextProps {
  text: string;
}

const MarkdownText: React.FC<MarkdownTextProps> = ({ text }) => {
  const parseText = (input: string) => {
    const parts = input.split(/(\*\*.*?\*\*|__.*?__|_.*?_)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      } else if (part.startsWith("__") && part.endsWith("__")) {
        return (
          <span key={index} className="underline">
            {part.slice(2, -2)}
          </span>
        );
      } else if (part.startsWith("_") && part.endsWith("_")) {
        return (
          <span key={index} className="font-light text-light-text">
            {part.slice(1, -1)}
          </span>
        );
      }
      return part;
    });
  };

  return parseText(text);
};

export default MarkdownText;
