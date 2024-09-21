import { useEffect, useCallback } from 'react';

interface UseRootScrollLockOptions {
  isLocked: boolean;
}

function useRootScrollLock({ isLocked }: UseRootScrollLockOptions) {
  const lockScroll = useCallback(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }, []);

  useEffect(() => {
    if (isLocked) {
      lockScroll();
    } else {
      unlockScroll();
    }

    return () => {
      unlockScroll();
    };
  }, [isLocked, lockScroll, unlockScroll]);
}

export default useRootScrollLock;