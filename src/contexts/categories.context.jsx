import { createContext, useEffect, useState } from "react";
import {  getCategoriesAndDocument } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap, setCategoriesMap };

  useEffect(() => {
    const getCategoriesMap = async () => {
      try {
        const categoriesMap = await getCategoriesAndDocument();
        setCategoriesMap(categoriesMap);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getCategoriesMap();
  }, []);

  

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};


