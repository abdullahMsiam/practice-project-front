// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import GoogleLogin from '../components/login-registration/GoogleLogin';

const Login = () => {
    return (
        <form className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <h1 className="text-2xl font-bold pt-6">Policy Alert!</h1>
                    <ol className='pb-6 pt-2 list-disc sm:hidden lg:block'>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, corporis?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, corporis?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, corporis?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, corporis?</li>
                    </ol>

                </div>

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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