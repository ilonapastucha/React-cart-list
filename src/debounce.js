import { useCallback, useEffect, useRef } from 'react';
import debounce from 'lodash.debounce';

export const lodashDebounce = (value, delay) => {
  const inputsRef = useRef(value);
  useEffect(() => {
    inputsRef.current = { value, delay };
  });
  return useCallback(
    debounce((...args) => {
      if (inputsRef.current.delay === delay) inputsRef.current.value(...args);
    }, delay),
    [delay, debounce]
  );
};
