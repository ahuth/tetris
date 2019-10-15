import Hammer from 'hammerjs';
import { useEffect } from 'react';

type SwipeEvent = 'swipeleft' | 'swiperight' | 'swipeup' | 'swipedown' | 'tap';

const hammer = new Hammer(document.body);

export default function useTouchHandler(swipeEvent: SwipeEvent, handler: () => void): void {
  useEffect(() => {
    hammer.on(swipeEvent, handler);
    return () => hammer.off(swipeEvent, handler);
  }, [swipeEvent, handler]);
}
