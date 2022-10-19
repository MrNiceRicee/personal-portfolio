import { useState, useEffect } from 'react';
import * as Switch from '@radix-ui/react-switch';

// replace \n with a space
const ctl = (className: string) => className.split('/n').join(' ');

const DarkModeButton = () => {
  // check local storage for dark mode preference
  // or use the prefers-color-scheme media query
  const [isDark, setIsDark] = useState(
    !!localStorage.getItem('darkMode')
      ? localStorage.getItem('darkMode') === 'true'
      : window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  // set the dark mode preference in local storage
  const setDarkMode = (mode: boolean) => {
    localStorage.setItem('darkMode', mode.toString());
    setIsDark(mode);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
    if (!isDark) {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <Switch.Root
      className={ctl(`
        group relative h-6 w-12 overflow-hidden rounded-full
        bg-zinc-400 transition-all duration-300 focus:outline-none focus:ring-2
        focus:ring-zinc-500 focus:ring-offset-2 
        focus:ring-offset-zinc-100
        data-state-checked:bg-zinc-700
        dark:bg-zinc-700
      `)}
      aria-label="Dark mode toggle"
      onCheckedChange={setDarkMode}
      checked={isDark}
    >
      <Switch.Thumb
        className={ctl(`
            ease-[cubic-bezier(0.5, -0.55, 0.4,1.7)]
            before
            relative
            block
            h-4
            w-4 translate-x-1 rounded-lg bg-white
            shadow
            transition-all
            duration-150
            before:absolute
            before:inset-0
            before:h-2
            before:w-2
            before:translate-y-[50%]
            before:translate-x-[50%]
            before:scale-0
            before:rounded-lg
            before:bg-blue-300
            before:shadow-inner
            before:transition-transform
            before:duration-150
            before:group-focus:scale-100
            group-active:w-6
            group-active:rounded-[1.5rem]
            data-state-checked:translate-x-7
            group-active:data-state-checked:translate-x-5
            group-active:data-state-unchecked:translate-x-[0.275rem]
            before:group-active:data-state-unchecked:translate-x-[150%]
          `)}
      />
      <img
        src="/moon.svg"
        alt="moon"
        className={`
          pointer-events-none
          absolute left-2.5 top-1/2
          h-4 w-4
          -translate-y-1/2 -translate-x-1/2
          transform fill-white transition-all
          duration-300 ease-[cubic-bezier(0.5,-0.55,0.4,1.7)]
          ${
            isDark
              ? 'group-active:top-3/4'
              : 'top-[200%] group-active:top-[115%]'
          }
        `}
      />
      <img
        src="/sun.svg"
        alt="sun"
        className={`
          pointer-events-none
          absolute -right-1.5 top-1/2
          h-4 w-4
          -translate-y-1/2 -translate-x-1/2
          transform fill-white transition-all
          duration-300 ease-[cubic-bezier(0.5,-0.55,0.4,1.7)]
          ${
            isDark
              ? 'top-[200%] group-active:top-[115%]'
              : 'group-active:top-3/4'
          }
        `}
      />
    </Switch.Root>
  );
};

export default DarkModeButton;
