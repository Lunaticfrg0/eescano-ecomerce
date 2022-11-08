import { useState, useEffect } from "react";
import { createContext } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {},

});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState([])

    useEffect(() => {
       const getCategories = async () => {
        const categoriesMap = await  getCategoriesAndDocuments()
        setCategoriesMap(categoriesMap)
       }
       getCategories();
    }, [])
    const value = {categoriesMap}
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}