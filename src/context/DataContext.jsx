import { createContext, useContext } from "react";
import { sampleData } from "../mockData/sampleData";
import { data } from "autoprefixer";
// step 1 - Create the context
const DataContext = createContext();

// step 2 - create the provider function
// ***** // function DataProvider({ children }) {}
const DataProvider = ({ children }) => {
  return (
    <DataContext.Provider value={sampleData}>{children}</DataContext.Provider>
  );
};

// Creating custom hooks
function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a Data Provider");
  }
  return context;
}

export { DataProvider, useData };
