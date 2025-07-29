'use client';

import useFocusMode from '@hooks/useFocusMode';
import useGlobal from '@hooks/useGlobal';
import useShortcut from '@hooks/useShortcut';
import useTheme from '@hooks/useTheme';

function Shortcuts() {
  const { mounted, toggleTheme } = useTheme();
  const { isQuickAccessOpen, setIsQuickAccessOpen } = useGlobal();
  const { focusMode, setFocusMode } = useFocusMode();

  useShortcut('KeyD', () => {
    if (mounted) {
      toggleTheme();
    }
  });

  useShortcut('KeyQ', () => {
    setIsQuickAccessOpen(!isQuickAccessOpen);
  });

  useShortcut('KeyF', () => {
    setFocusMode(!focusMode);
  });

  return null;
}

export default Shortcuts;
