import { useState, useCallback, ChangeEvent } from 'react';

const useFormInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  }, []);
  
  const reset = useCallback(() => setValue(initialValue), [initialValue]);
  
  return {
    value,
    onChange,
    reset,
    setValue,
    bind: {
      value,
      onChange
    }
  };
};

export default useFormInput;