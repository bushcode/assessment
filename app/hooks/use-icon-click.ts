import { useCallback, useState } from "react";

export function useIconClick(
  initialState: boolean = false,
  onClick?: () => void
) {
  const [isClicked, setIsClicked] = useState(initialState);

  //to preserve the state across re-renders and instances
  const handleClick = useCallback(() => {
    setIsClicked((prev) => !prev);
    if (onClick) onClick();
  }, [onClick]);

  return { isClicked, handleClick };
}
