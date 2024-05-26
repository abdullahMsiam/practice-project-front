import SingleProduct from "./SingleProduct";

const Products = () => {
    return (
        <div className="grid grid-cols-3 gap-6 mt-6">
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
        </div>
    );
};

export default Products;