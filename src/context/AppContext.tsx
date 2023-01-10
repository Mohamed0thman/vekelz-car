import { createContext, useState } from "react";

const state = {
  darkTheme: false,
  toggleTheme: () => {},
};

const AppContext = createContext(state);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((theme) => !theme);
  };

  console.log("darkTheme", darkTheme);

  return (
    <AppContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};
export { AppProvider, AppContext };
