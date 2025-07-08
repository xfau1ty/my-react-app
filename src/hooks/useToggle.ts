import { useState, useCallback } from 'react';

const useToggle = (initialState = false): [boolean, () => void, (value: boolean) => void] => {
  const [state, setState] = useState(initialState);
  
  const toggle = useCallback(() => setState(prev => !prev), []);
  const set = useCallback((value: boolean) => setState(value), []);
  
  return [state, toggle, set];
};

export default useToggle;