import { createContext, useContext, useState } from "react";

const ColorContext = createContext();

const ColorProvider = ({ children }) => {
  const [colors, setColors] = useState({
    primary: "bg-blue-500",
    secondary: "bg-green-500",
    tertiary: "bg-black",
  });

  return (
    <ColorContext.Provider value={{ colors, setColors }}>
      {children}
    </ColorContext.Provider>
  );
};

// custom Hook
function useColors() {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColor must be used within a provider");
  }

  return context;
}

export { ColorProvider, useColors };
