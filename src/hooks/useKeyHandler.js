import React from 'react';

export default function useKeyHandler(key, handler) {
  React.useEffect(() => {
    function handleKeyUp(event) {
      if (event.key === key) {
        handler(event);
      }
    }

    document.addEventListener('keydown', handleKeyUp);

    return () => document.removeEventListener('keyup', handleKeyUp);
  }, [key]);
}
