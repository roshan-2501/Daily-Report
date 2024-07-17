import { createContext, useContext } from "react";

export const ThemeContext = createContext({   //here we are creating the context
  themeMode: "",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider=ThemeContext.Provider; //making all the components aware that the context exist

export default function useTheme(){   // By using this, every component can access the store
    return useContext(ThemeContext);
}