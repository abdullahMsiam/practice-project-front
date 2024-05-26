
const SingleProduct = () => {
    return (
        <div>
            <div className="card card-compact w-720 bg-base-100 shadow-xl">
                <img className="h-56" src="/src/assets/product.jpg" alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title">Food!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;