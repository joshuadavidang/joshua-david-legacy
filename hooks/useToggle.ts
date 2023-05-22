import { useCallback, useState } from 'react';

const useToggle = (initialState: boolean = false): [boolean, any, any] => {
  const [state, setState] = useState<boolean>(initialState);
  const close = useCallback((): void => setState(false), []);
  const toggle = useCallback((): void => setState((state) => !state), []);

  return [state, close, toggle];
};

export default useToggle;
