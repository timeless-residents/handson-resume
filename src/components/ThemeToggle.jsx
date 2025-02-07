import { useState, useEffect } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'system';
  });

  const applyTheme = (newTheme) => {
    const root = document.documentElement;
    const isDark = 
      newTheme === 'dark' || 
      (newTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    if (newTheme === 'system') {
      localStorage.removeItem('theme');
    } else {
      localStorage.setItem('theme', newTheme);
    }
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  // 初期化時とシステムテーマの変更を監視
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // 初期テーマを適用
    applyTheme(theme);

    // システムテーマの変更を監視
    const handleSystemThemeChange = () => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, [theme]);

  return (
    <div className="fixed top-4 right-4 flex gap-2 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg">
      <button
        onClick={() => handleThemeChange('light')}
        className={`p-2 rounded-md transition-colors ${
          theme === 'light' 
            ? 'bg-blue-100 text-blue-600' 
            : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
        aria-label="Light mode"
      >
        <Sun size={20} />
      </button>
      <button
        onClick={() => handleThemeChange('dark')}
        className={`p-2 rounded-md transition-colors ${
          theme === 'dark'
            ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300'
            : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
        aria-label="Dark mode"
      >
        <Moon size={20} />
      </button>
      <button
        onClick={() => handleThemeChange('system')}
        className={`p-2 rounded-md transition-colors ${
          theme === 'system'
            ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300'
            : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
        aria-label="System theme"
      >
        <Monitor size={20} />
      </button>
    </div>
  );
};

export default ThemeToggle;