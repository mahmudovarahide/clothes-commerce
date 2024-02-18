import "./shop.style.scss";
import { Route, Routes } from "react-router-dom";
import CategoriesPriview from "../categories-preview/categories-preview";
import Category from "../category/category.component";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategoriesAndDocument } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/categories.reducer";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocument("categories");
      dispatch(setCategories(categoriesArray));
    };
    return getCategoriesMap;
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPriview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
