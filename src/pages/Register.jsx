// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Register = () => {

    const [passMatch, setPassMatch] = useState(true);
    const { createUser } = useAuth();


    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        if (password !== confirmPassword) {
            setPassMatch(false);
        }

        if (password === confirmPassword) {
            createUser(email, password);
        }
        console.log(email, password, confirmPassword);
    }
    return (
        <form onSubmit={handleSubmit} className="hero min-h-screen md:bg-base-200 -ms-5 md:mx-auto">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up!</h1>
                    <h1 className="text-2xl font-bold pt-6 hidden md:block">Policy Alert!</h1>
                    <ol className='pb-6 pt-2 list-disc hidden md:block'>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, corporis?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, corporis?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, corporis?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, corporis?</li>
                    </ol>

                </div>

                <div className="card shrink-0   md:w-full max-w-sm shadow-2xl bg-base-100">
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="confirm-password" name='confirmPassword' className="input input-bordered" required />
                        </div>
                        {
                            (!passMatch) && (<div className='text-red-600'>  password did not match! </div>)
                        }

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign up</button>
                            <button className="btn border-black border-2 my-4"> <FcGoogle /> Google</button>
                            <p>Already have an account? <Link to={"/login"} className='text-red-600 font-bold hover:underline'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Register;