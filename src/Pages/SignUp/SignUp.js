import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const navigate = useNavigate();

    const handleSignIn = (data) => {
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Registration is completed')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        navigate('/');
                    })
                    .catch(err => console.error(err))
            })
            .catch(err => {
                console.error(err)
                setSignUpError(err)
            })
    }

    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div>
                <h3 className='text-2xl font-semibold text-center mb-8'>Sign Up</h3>
                <form onSubmit={handleSubmit(handleSignIn)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", {
                            required: "Name is required"
                        })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='mt-2 text-error'>{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", {
                            required: "Email Address is required"
                        })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='mt-2 text-error'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs mb-3.5">
                        <label className="label"><span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Input at least 6 characters" },
                            pattern: { value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/, message: "Password must be strong" }
                        })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='mt-2 text-error'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full' type="submit" value="sign up" />
                    {signUpError && <p className='text-error text-center'>Email already in use</p>}
                </form>

                <p className='text-sm p-6 text-center'>Already have an account? <Link to="/login" className='text-primary'>Please Login</Link></p>
                <div className="divider mt-0">OR</div>
                <button className='btn w-full btn-outline btn-accent'>continue with google</button>

            </div >
        </div >
    );
};

export default SignUp;