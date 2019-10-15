import Hammer from 'hammerjs';
import { useEffect } from 'react';

type SwipeEvent = 'swipeleft' | 'swiperight' | 'swipeup' | 'swipedown' | 'tap';

export default function useTouchHandler(swipeEvent: SwipeEvent, handler: () => void): void {
  useEffect(() => {
    Hammer.on(document, swipeEvent, handler);
    return () => Hammer.off(document, swipeEvent, handler);
  }, [swipeEvent, handler]);
}
