import { useEffect, useRef } from 'react';

export default function useInterval(delay: number, callback: () => void) {
  const callbackRef  = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback])

  useEffect(() => {
    const id = setInterval(callbackRef.current, delay);
    return () => clearInterval(id);
  }, [delay, callbackRef]);
}
