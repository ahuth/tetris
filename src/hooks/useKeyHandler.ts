import React from 'react';

export default function useKeyHandler(key: string, handler: (event: KeyboardEvent) => void) {
  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === key) {
        handler(event);
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [key]);
}
