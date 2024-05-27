import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";

const GoogleLogin = () => {

    const { googleLogin } = useAuth();

    const handleGoogleLogin = () => {
        googleLogin();
    }

    return (
        <div>
            <button onClick={handleGoogleLogin} className="btn border-black border-2 my-4 w-full"> <FcGoogle /> Google</button>
        </div>
    );
};

export default GoogleLogin;