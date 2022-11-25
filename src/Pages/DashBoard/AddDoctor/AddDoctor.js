import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = data => {
        // this part is for image insert in imgbb
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }
                    // save doctor info to db
                    fetch('http://localhost:5000/doctors', {
                        method: 'POST',
                        headers: {
                            "content-type": 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`);
                            navigate('/dashboard/managedDoctors')
                        })
                }
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='w-96 mx-8 py'>
            <h1 className='text-3xl'>Add A Doctor</h1>
            <form onSubmit={handleSubmit(handleAddDoctor)}>

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

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Specialty</span>
                    </label>
                    <select
                        {...register('specialty')}
                        className="select select-bordered w-full max-w-xs">
                        {
                            specialties.map(specialty => <option key={specialty._id}
                                value={specialty.name}
                            >{specialty.name}</option>)
                        }
                    </select>
                </div>

                <div className="form-control w-full max-w-xs  mb-3.5">
                    <label className="label"><span className="label-text">Photo</span>
                    </label>
                    <input type="file" {...register("image", {
                        required: "Photo is required"
                    })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='mt-2 text-error'>{errors.img?.message}</p>}
                </div>
                <input className='btn btn-accent w-5/6' type="submit" value="add doctor" />
            </form>
        </div>
    );
};

export default AddDoctor;