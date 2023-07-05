import { useCallback, useState } from 'react';

const useToggle = (): [boolean, any] => {
  const [toggleState, setToggleState] = useState<boolean>(false);
  const handleToggle = useCallback(
    (): void => setToggleState((state) => !state),
    []
  );

  return [toggleState, handleToggle];
};

export default useToggle;
