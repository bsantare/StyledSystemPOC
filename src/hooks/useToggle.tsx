import { useCallback, useState } from 'react';

type ToggleState = (() => boolean) | boolean

export function useToggle(state: ToggleState = false) {
  const [value, setValue] = useState(state);

  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  return [value, toggle] as const;
}
