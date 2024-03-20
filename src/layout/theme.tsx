import { createContext, useContext, useEffect, useState } from 'react';
import { useMedia } from 'react-use';

type Theme = 'dark' | 'light';

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({
  theme: 'light',
  setTheme: (theme) => {},
});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  let defaultTheme = localStorage.getItem('theme');

  if (!defaultTheme) {
    const sysTheme = useMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light';
    useEffect(() => {
      setTheme(sysTheme);
    }, [sysTheme]);
  }

  const [theme, setTheme] = useState((defaultTheme || 'light') as Theme);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  },[theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
  );
};
