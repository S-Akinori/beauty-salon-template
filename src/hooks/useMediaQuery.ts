import { useEffect, useState } from "react";
import { breakpoints } from "src/variables/breakpoints";

interface Props {
  minWidth?: number
}

const useMediaQuery = (minWidth = 768) => {
  const [state, setState] = useState({
    windowWidth: 0,
    isDesiredWidth: false,
    breakPoint: breakpoints[0]
  });

  useEffect(() => {
    const resizeHandler = () => {
      if(typeof window !== 'undefined') {
        const currentWindowWidth = window.innerWidth;
        const isDesiredWidth = currentWindowWidth < minWidth;
        const sortedBreakpoints  = breakpoints.sort((a,b) => (
          (a.id > b.id) ? -1 : 1
        ))
        const breakpoint = sortedBreakpoints.find(breakpoint => breakpoint.value < currentWindowWidth)!;
        setState({ windowWidth: currentWindowWidth, isDesiredWidth, breakPoint: breakpoint });
      }
    };
    if(state.windowWidth === 0) resizeHandler()
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, [state.windowWidth]);

  return state;
};

export default useMediaQuery;