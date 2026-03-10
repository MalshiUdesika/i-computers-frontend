import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import getFormattedPrice from "../../src/utils/price-format";

export  default function AdminProductPage(){

    const sampleProducts = [
  {
    "productId": "P1001",
    "name": "Wireless Mouse",
    "price": 2500,
    "labelledPrice": 3200,
    "category": "Accessories",
    "images": [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3"
    ],
    "isVisible": true,
    "brand": "Logitech",
    "model": "M185"
  },
  {
    "productId": "P1002",
    "name": "Mechanical Keyboard",
    "price": 8500,
    "labelledPrice": 9500,
    "category": "Accessories",
    "images": [
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f"
    ],
    "isVisible": true,
    "brand": "Redragon",
    "model": "K552"
  },
  {
    "productId": "P1003",
    "name": "Gaming Headset",
    "price": 6500,
    "labelledPrice": 7200,
    "category": "Audio",
    "images": [
      "https://images.unsplash.com/photo-1580894894513-541e068a3e2b"
    ],
    "isVisible": false,
    "brand": "HyperX",
    "model": "Cloud Stinger"
  },
  {
    "productId": "P1004",
    "name": "27 inch Monitor",
    "price": 52000,
    "labelledPrice": 58000,
    "category": "Display",
    "images": [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf"
    ],
    "isVisible": true,
    "brand": "Samsung",
    "model": "Odyssey G5"
  },
  {
    "productId": "P1005",
    "name": "External SSD 1TB",
    "price": 32000,
    "labelledPrice": 36000,
    "category": "Storage",
    "images": [
      "https://images.unsplash.com/photo-1580894908361-967195033215"
    ],
    "isVisible": true,
    "brand": "SanDisk",
    "model": "Extreme Portable"
  }
];

    const [products, setProducts] = useState([]);

    return(
        <div className="w-full h-full overflow-y-scroll ">

            {/* {
                products.map(
                    (item, index)=>{
                        return <h1 key={item.productId}>{item.name}</h1>
                    }
                )
             } */}

             <div className="w-full p-6 bg-primary rounded-xl shadow-lg overflow-x-auto">
  <table className="w-full border-collapse text-sm">
    
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
      </tr>
    </thead>

    {/* Table Body */}
    <tbody className="bg-white text-secondary">
      {sampleProducts.map((item, index) => {
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
          </tr>
        );
      })}
    </tbody>

  </table>
</div>

             <Link to="/admin/add-product" className="text-white bg-accent w-[50px] h-[50px] flex justify-center items-center text-2xl rounded-[20px] hover:rounded-full fixed bottom-12 right-16">
                <FaPlus/>
             </Link>
        </div>
    )
}