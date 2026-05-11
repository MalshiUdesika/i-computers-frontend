import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { FaRegListAlt } from "react-icons/fa";
import { MdOutlineInventory2 } from "react-icons/md";
import { LuLogOut, LuUserRound } from "react-icons/lu";
import AdminProductPage from "./admin/adminProductPage";
import AdminAddProductPage from "./admin/adminAddProductPage";
import AdminUpdateProductPage from "./admin/adminUpdateProductPage";
import AdminOrdersPage from "./admin/adminOrdersPage";
import AdminUsersPage from "./admin/adminUsersPage";

export default function AdminPage(){
    const navigate = useNavigate();

    function logout(){

        localStorage.removeItem("token");
        navigate("/login", { replace: true });
    }

    return(
        <div className="w-full h-full border-4 flex bg-accent">
            <div className="w-[300px] h-full flex flex-col justify-between bg-accent text-white text-xl">
                <div>
                    <h1 className="text-3xl font-bold p-5 border-b-4 border-white">Admin Panel</h1>
                    <Link className="flex w-full p-[10px] gap-3 items-center hover:bg-white hover:text-accent" to="/admin/"><FaRegListAlt/>Oders</Link>
                    <Link className="flex w-full p-[10px] gap-3 items-center hover:bg-white hover:text-accent" to="/admin/products"><MdOutlineInventory2/>Products</Link>
                    <Link className="flex w-full p-[10px] gap-3 items-center hover:bg-white hover:text-accent" to="/admin/users"><LuUserRound/>Users</Link>
                </div>
                <div className="mt-auto p-4">
                    <button
                        onClick={() => {
                            logout();
                        }}
                        className="w-full flex items-center justify-center gap-3 bg-accent/50 text-white p-3 rounded-xl font-semibold hover:bg-white hover:text-accent transition-all duration-300 shadow-lg"
                    >
                        <LuLogOut size={22} />
                        Logout
                    </button>
                </div>
            </div>

            <div className="w-[calc(100%-300px)] h-full border-8 border-accent rounded-[20px] bg-primary p-4">
                <Routes>
                    <Route path="/"element={<AdminOrdersPage/>}/>
                    <Route path="products" element={<AdminProductPage/>}/>
                    <Route path="users" element={<AdminUsersPage/>}/>
                    <Route path="add-product" element={<AdminAddProductPage/>}/>
                    <Route path="update-product" element={<AdminUpdateProductPage/>}/>
                </Routes>
            </div>
        </div>
    )
}

//instead of w-[calc(100%-300px)] you can use flex-1