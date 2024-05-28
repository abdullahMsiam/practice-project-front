import SingleProduct from "./SingleProduct";

const Products = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-center mt-6">Food Items</h1>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mt-6">
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
            </div>
        </div>
    );
};

export default Products;