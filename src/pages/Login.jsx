// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import GoogleLogin from '../components/login-registration/GoogleLogin';
import useAuth from '../hooks/useAuth';

const Login = () => {

    const { signIn } = useAuth();
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password);

        console.log(email, password);
    }
    return (
        <form onSubmit={handleSubmit} className="hero min-h-screen md:bg-base-200 -ms-5 md:mx-auto">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <h1 className="text-2xl font-bold pt-6 hidden md:block">Policy Alert!</h1>
                    <ol className='pb-6 pt-2 list-disc hidden lg:block'>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, corporis?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, corporis?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, corporis?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, corporis?</li>
                    </ol>

                </div>

                <div className="card shrink-0 md:w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <GoogleLogin />
                            <p>New here? <Link to={"/register"} className='text-red-600 font-bold hover:underline'>Register</Link></p>
                        </div>
                    </div>
                </div>

            </div>
        </form>
    );
};

export default Login;