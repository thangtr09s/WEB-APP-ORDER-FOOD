import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useState,
} from "react";

interface ThemeProps {
  theme: string | null;
  handleChangeTheme: (value: string) => void;
}

const ThemeContext = createContext<ThemeProps>({
  theme: "",
  handleChangeTheme: () => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useLayoutEffect(() => {
    const htmlElement = document.querySelector("html");

    if (!htmlElement) return;

    htmlElement.setAttribute("data-theme", theme as string);
    setTheme(localStorage.getItem("theme"));
  }, [theme]);

  const handleChangeTheme = useCallback(
    (value: string) => {
      setTheme(localStorage.setItem("theme", value) as any);
    },
    [theme]
  );

  const themeData = {
    handleChangeTheme,
    theme,
  };

  return <ThemeContext.Provider value={themeData}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};

export default ThemeProvider;
