import { useLoaderData } from "react-router-dom";
import SingleProduct from "./SingleProduct";

const Products = () => {
    const shoes = useLoaderData();
    console.log(shoes);
    return (
        <div>
            <h1 className="text-2xl font-bold text-center mt-6">Food Items</h1>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-x-4 gap-y-2 mt-6">

                {
                    shoes.slice(0, 6).map(shoe => (
                        <SingleProduct key={shoe.id} shoe={shoe} />
                    ))
                }
            </div>
        </div>
    );
};

export default Products;