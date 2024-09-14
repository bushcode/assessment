import React from "react";

interface TagProps {
  tagText: string;
}

function Tag({ tagText }: TagProps) {
  return <span className="text-purple-primary text-xs">#{tagText}</span>;
}

export default Tag;
