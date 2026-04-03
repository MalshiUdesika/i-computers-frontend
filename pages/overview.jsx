import { useParams } from "react-router-dom"

export default function OverView(){
    const params = useParams();
    

    return(
        <div>
            <h1>Product Overview Page</h1>
        </div>
    )
}