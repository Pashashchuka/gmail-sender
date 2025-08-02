import { useState, useEffect } from 'react';

export type Theme = 'dark' | 'light';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
      return savedTheme;
    }

    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: light)').matches
    ) {
      return 'light';
    }

    return 'dark';
  });

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return {
    theme,
    toggleTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light',
  };
};
