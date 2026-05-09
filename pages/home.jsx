import { Route, Routes } from "react-router-dom";
import Header from "../src/components/header";
import ProductPage from "./productPage";
import OverView from "./overview";
import Cart from "./admin/cart";
import Checkout from "./admin/checkout";
import MyOrdersPage from "./myOrdersPage";
import SettingsPage from "./settings";
import LandingPage from "../src/components/landingPage";
import AboutPage from "./about";
import ContactPage from "./contactPage";

export default function HomePage(){
    return(
        <div className="w-full h-screen overflow-y-scroll ">
            <Header/>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/products" element={<ProductPage/>}/>
                <Route path="/cart"element={<Cart/>}/>
                <Route path="/Overview/:productId" element={<OverView/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/my-orders" element={<MyOrdersPage/>}/>
                <Route path="/settings" element={<SettingsPage/>}/>
                <Route path="/*" element={<div>404 Not Found</div>}/>
            </Routes>
        </div>
    )
}