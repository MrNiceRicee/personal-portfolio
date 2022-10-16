import { useState, useEffect } from "react";
import * as Switch from "@radix-ui/react-switch";

const ctl = (className: string) => className.split("/n").join(" ");

const DarkModeButton = () => {
  // check local storage for dark mode preference
  // or use the prefers-color-scheme media query
  const [isDark, setIsDark] = useState(
    !!localStorage.getItem("darkMode")
      ? localStorage.getItem("darkMode") === "true"
      : window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  // set the dark mode preference in local storage
  const setDarkMode = (mode: boolean) => {
    localStorage.setItem("darkMode", mode.toString());
    setIsDark(mode);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    }
    if (!isDark) {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <Switch.Root
      className={ctl(`
        w-12 h-6 rounded-full relative bg-zinc-400 dark:bg-zinc-6 00
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-100 focus:ring-zinc-500
        transition-all duration-300 
        data-state-checked:bg-zinc-700
        group
      `)}
      aria-label="Dark mode toggle"
      onCheckedChange={setDarkMode}
      checked={isDark}
    >
      <Switch.Thumb
        className={ctl(`
            block
            w-4 h-4
            bg-white
            rounded-lg
            shadow
            translate-x-1
            transition-all
            ease-[cubic-bezier(0.5, -0.55, 0.4, 1.7)]
            duration-150
            group-active:w-6
            group-active:rounded-[1.5rem]
            data-state-checked:translate-x-7
            group-active:data-state-checked:translate-x-5
            group-active:data-state-unchecked:translate-x-[0.275rem]
            relative
            before
            before:absolute
            before:inset-0
            before:w-2
            before:h-2
            before:translate-y-[50%]
            before:translate-x-[50%]
            before:bg-blue-300
            before:rounded-lg
            before:shadow-inner
            before:scale-0
            before:transition-transform
            before:duration-150
            before:group-focus:scale-100
            before:group-active:data-state-unchecked:translate-x-[150%]
          `)}
      />
    </Switch.Root>
  );
};

export default DarkModeButton;
