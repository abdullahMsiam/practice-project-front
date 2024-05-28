
const SingleProduct = () => {
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl hover:underline hover:scale-105">
                <img className="h-32" src="/src/assets/product.jpg" alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title">Food!</h2>
                    <p>You may choice!</p>
                    <div className="card-actions justify-end">
                        <button className="btn w-full btn-sm btn-success">Trail On</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;