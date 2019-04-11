import React from 'react';

export default function useKeyHandler(key, handler) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === key) {
        handler(event);
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [key]);
}
