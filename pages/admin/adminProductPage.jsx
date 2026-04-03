import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import getFormattedPrice from "../../src/utils/price-format";
import axios from "axios";
import { CiEdit, CiTrash } from "react-icons/ci";
import toast from "react-hot-toast";
import LoadingAnimation from "../../src/components/loadingAnimation";
import DeleteModel from "../../src/components/deleteModel";


export  default function AdminProductPage(){

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)


    useEffect(()=>{

      if(loading){
        const token = localStorage.getItem("token");

        axios.get(import.meta.env.VITE_API_URL + "/products", {
            headers: {
                Authorization: "Bearer " + token,
            },
        }).then((response) => {
            setProducts(response.data);
            setLoading(false)
        });

      }
    }, [loading])

    return(
        <div className="w-full h-full overflow-y-scroll ">

             <div className="w-full p-6 bg-primary rounded-xl shadow-lg overflow-x-auto">
               {loading?<div className="w-full h-full flex justify-center items-center"><LoadingAnimation/></div>: <table className="w-full border-collapse text-sm">
    
    {/* Table Head */}
    <thead className="bg-accent/80 text-white uppercase">
      <tr>
        <th className="px-4 py-3 text-left">Product ID</th>
        <th className="px-4 py-3 text-left">Name</th>
        <th className="px-4 py-3 text-left">Price</th>
        <th className="px-4 py-3 text-left">Labelled Price</th>
        <th className="px-4 py-3 text-left">Category</th>
        <th className="px-4 py-3 text-left">Image</th>
        <th className="px-4 py-3 text-left">Visibility</th>
        <th className="px-4 py-3 text-left">Brand</th>
        <th className="px-4 py-3 text-left">Model</th>
        <th className="px-4 py-3 text-left">Actions</th>
      </tr>
    </thead>

    {/* Table Body */}
    <tbody className="bg-white text-secondary">
      {products.map((item, index) => {
        return (
          <tr key={index}
            className="odd:bg-accent/15 border-b border-gray-200 hover:bg-primary transition">

            <td className="px-4 py-3">{item.productId}</td>
            <td className="px-4 py-3 font-medium">{item.name}</td>
            <td className="px-4 py-3">{getFormattedPrice(item.price)}</td>
            <td className="px-4 py-3">{getFormattedPrice(item.labelledPrice)}</td>
            <td className="px-4 py-3">{item.category}</td>

            {/* Image */}
            <td className="px-4 py-3">
              <img
                src={item.images[0]}
                alt={item.name}
                className="w-12 h-12 object-cover rounded-lg border"
              />
            </td>

            {/* Visibility Badge */}
            <td className="px-4 py-3">
              <span
                className={`px-3 py-1 text-xs rounded-full font-semibold ${
                  item.isVisible
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {item.isVisible ? "Visible" : "Hidden"}
              </span>
            </td>

            <td className="px-4 py-3">{item.brand}</td>
            <td className="px-4 py-3">{item.model}</td>

            <td className="h-full px-5 py-4">
              <div className="flex justify-center items-center text-2xl gap-2">
                <Link to="/admin/update-product" state={item}>

                <CiEdit  className="hover:text-accent"/></Link>
                <DeleteModel product={item} setLoading={setLoading}/>

              </div>
            </td>
          </tr>
        );
      })}
    </tbody>

  </table>}
</div>

             <Link to="/admin/add-product" className="text-white bg-accent w-[50px] h-[50px] flex justify-center items-center text-2xl rounded-[20px] hover:rounded-full fixed bottom-12 right-16">
                <FaPlus/>
             </Link>
        </div>
    )
}