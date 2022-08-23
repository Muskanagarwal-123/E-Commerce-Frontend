import "./../App.css";
import Header from "./Header";
import Home from "./Home";
import VerifiedShopsList from "./VerifiedShops/VerifiedShopsList";
import BlockedShops from "./BlockedShops";
import NewRequestList from "./NewRequests/NewRequestsList";
import { Routes, Route } from "react-router-dom";
import ShopTemplate from "./NewRequests/ShopTemplate";
import Product from "./Product";
import ProductList from "./ProductList";
import VerifiedShopTemplate from "./VerifiedShops/VerifiedShopTemplate";
import ProductImages from "./ProductImages";
import CreateShop from "./CreateShop";
import AddProduct from "./AddProduct";
import CategoryList from "./Category/CategoryList";
import SubCategoryList from "./SubCategory/SubCategoryList";
import AddCategory from "./Category/AddCategory";
import AddHighlight from "./AddHighlight";
import ChildCategoryList from "./ChildCategory/ChildCategoryList"
import ProductRefinedList from "./ProductRefinedList"
import Footer from "./Footer";
import ShopBanner from "./ShopBanner";
import Reports from "./Reports";
function RoutesFunc() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="home" element={<Home />}></Route>
       
        <Route path="newRequests" element={<NewRequestList />}></Route>
        <Route path="newRequests/:id" element={<ShopTemplate />}></Route>
       
        <Route path="verifiedShopsList/:id" element={<VerifiedShopTemplate />}></Route>
        <Route path="verifiedShopsList" element={<VerifiedShopsList />}></Route>
       
        <Route path="verifiedShopsList/showProducts/:shopId" element={<ProductList />}></Route>
        <Route path="verifiedShopsList/showProducts/:shopId/:id" element={<Product />}></Route>

        <Route path="verifiedShopsList/addProduct/:shopId" element={<AddProduct />}></Route>
        <Route path="verifiedShopsList/addHighlight/:shopId" element={<AddHighlight />}></Route>
        <Route path="verifiedShopsList/addShopBanner/:shopId" element={<ShopBanner />}></Route>

        <Route path="categories" element={<CategoryList />}></Route>
        <Route path="categories/:catId" element={<SubCategoryList />}></Route>
        <Route path="categories/:catId/:subCatId" element={<ChildCategoryList />}></Route>
        
        <Route path="showProductsImages/:shopId/:id" element={<ProductImages />}></Route>
        <Route path="blockedShops" element={<BlockedShops />}></Route>
        <Route path="createShop" element={<CreateShop />}></Route>
        <Route path="reports" element={<Reports />}></Route>
        {/* <Route path="showCategories/:shopId/:catId/:subCatId/:childCatId" element={<ProductRefinedList />}></Route> */}
        {/* <Route path="addCategory/:id" element={<AddCategory />}></Route> */}
        <Route path="*" element={<Home />}></Route>
      </Routes>
      {/* <Footer/> */}
    </>
  );
}

export default RoutesFunc;
