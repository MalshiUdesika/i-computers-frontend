import { Route, Routes } from "react-router-dom";
import Header from "../src/components/header";
import ProductPage from "./productPage";
import OverView from "./overview";

export default function HomePage(){
    return(
        <div className="w-full min-h-screen">
            <Header/>
            <Routes>
                <Route path="/" element={<div>Home Page Content</div>}/>
                <Route path="/about" element={<div>About page content</div>}/>
                <Route path="/contact" element={<div>Contact page content</div>}/>
                <Route path="/products" element={<ProductPage/>}/>
                <Route path="/Overview/:productId" element={<OverView/>}/>
                <Route path="/*" element={<div>404 Not Found</div>}/>
            </Routes>
        </div>
    )
}