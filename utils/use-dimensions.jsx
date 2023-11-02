import { useRef, useEffect } from "react";

export const useDimensions = (ref) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (ref.current) {
        dimensions.current.width = ref.current.offsetWidth;
        dimensions.current.height = ref.current.offsetHeight;
      }
    };

    // Initial update
    updateDimensions();

    // Attach listeners for dynamic updates
    window.addEventListener("resize", updateDimensions);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [ref]);

  return dimensions.current;
};
