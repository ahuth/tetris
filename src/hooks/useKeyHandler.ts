import React from 'react';

export default function useKeyHandler(key: string, handler: (event?: KeyboardEvent) => void) {
  React.useEffect(() => {
    function handleKeyUp(event: KeyboardEvent) {
      if (event.key === key) {
        handler(event);
      }
    }

    document.addEventListener('keyup', handleKeyUp);

    return () => document.removeEventListener('keyup', handleKeyUp);
  }, [key]);
}
