import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const shoe = useLoaderData();
    console.log(shoe);
    return (
        <div>
            this is details
        </div>
    );
};

export default ProductDetails;