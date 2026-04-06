import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import LoadingAnimation from "../src/components/loadingAnimation";
import ImageSlideShow from "../src/components/imageSlideShow";

export default function OverView(){
    const params = useParams();

    const [product , setProduct] = useState(null);

    useEffect(
        ()=>{
            
            axios.get(import.meta.env.VITE_API_URL + "/products/" + params.productId)
            .then(
                (response)=>{
                    setProduct(response.data)
                }
                );
        }, []
    );
    

    return(
        <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center">
            {
                product == null? <LoadingAnimation/>:
                <div className="w-full h-full flex">
                    <div className="w-[50%] h-full">
                        <ImageSlideShow images={product.images}/>
                    </div>
                    <div className="w-[50%] h-full"></div>

                </div>
            }
        </div>
    )
        
}