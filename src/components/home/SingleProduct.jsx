import { Link } from "react-router-dom";

const SingleProduct = ({ shoe }) => {
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl hover:underline hover:scale-105">
                <img className="h-32" src={shoe.image_url} alt="Shoes" />
                <div className="card-body">
                    <h2 className="font-bold">{shoe.title}</h2>
                    <h2 className="text-xl font-semibold">{shoe.brand}</h2>
                    <h2 className="text-xl font-sans text-green-700 font-semibold">{shoe.price}</h2>
                    <p>{shoe.description.slice(0, 50)}...</p>
                    <div className="card-actions justify-end">
                        <button className="btn w-full btn-sm btn-success">
                            <Link to={`/products/${shoe.id}`}>Explore</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;