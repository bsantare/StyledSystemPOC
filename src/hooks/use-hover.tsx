import { useState } from 'react';

/**
 * Borrowed from https://github.com/beizhedenglong/react-hooks-lib/blob/master/src/hooks/useHover.js
 */

const useHover = () => {
  const [hovered, set] = useState(false);
  return {
    hovered,
    bind: {
      onMouseEnter: () => set(true),
      onMouseLeave: () => set(false),
    },
  };
};

export default useHover;
