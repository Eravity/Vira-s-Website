import { ReactNode, useState } from "react";

type TextExpanderProps = {
  children: ReactNode;
};

const TextExpander: React.FC<TextExpanderProps> = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Convert children to string if it's a string, otherwise use an empty string
  const text = typeof children === "string" ? children : "";
  const displayText = isExpanded
    ? text
    : text.split(" ").slice(0, 40).join(" ") + "...";

  return (
    <span>
      {displayText}{" "}
      <button
        className="text-primary-700 border-b border-primary-700 leading-3 pb-1"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </span>
  );
};

export default TextExpander;
