import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleLogin = (data) => {
        console.log(data);
    }

    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div>
                <h3 className='text-2xl font-semibold text-center mb-8'>Login</h3>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", {
                            required: "Email Address is required"
                        })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='mt-2 text-error'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength:{value:6,message:"Input at least 6 characters"}
                        })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='mt-2 text-error'>{errors.password?.message}</p>}
                        <label className="label"><span className="label-text">Forget Password?</span>
                        </label>
                    </div>
                    <input className='btn btn-accent w-full' type="submit" value="login" />
                </form>

                <p className='text-sm p-6 text-center'>New to Doctors Portal? <Link to="/signup" className='text-primary'>Create new account</Link></p>
                <div className="divider mt-0">OR</div>
                <button className='btn w-full btn-outline btn-accent'>continue with google</button>

            </div >
        </div >
    );
};

export default Login;