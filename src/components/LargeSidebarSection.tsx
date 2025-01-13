import React from "react";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type LargeSidebarSectionProps = {
  children: React.ReactNode;
  title?: string;
  visibleItemCount?: number;
};

export const LargeSidebarSection = ({
  children,
  title,
  visibleItemCount,
}: LargeSidebarSectionProps) => {
  const childrenArray = React.Children.toArray(children).flat();
  const [isExpanded, setIsExpanded] = useState(false);

  const showExpandButton = childrenArray.length > visibleItemCount;
  const ButtonIcon = isExpanded ? ChevronUp : ChevronDown;

  const visibleChildren = isExpanded
    ? childrenArray
    : childrenArray.slice(0, visibleItemCount);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {title && <div className="ml-4 mt-2 text-lg mb-1">{title}</div>}
      <div>{visibleChildren}</div>
      {showExpandButton && (
        <button
          onClick={handleToggleExpand}
          aria-expanded={isExpanded}
          className="w-full flex items-center justify-between rounded-lg gap-4 p-3 bg-transparent hover:bg-gray-100"
        >
          <ButtonIcon className="w-6 h-6" />
          <div>{isExpanded ? "Show less" : "Show more"}</div>
        </button>
      )}
    </div>
  );
};
