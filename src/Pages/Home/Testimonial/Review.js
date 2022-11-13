import React from 'react';

const Review = ({ review }) => {
    const { description, name, location, img } = review;
    return (
        <div className="card shadow-xl  mt-20">
            <div className="card-body">
                <p>{description}</p>
                <div className="card-actions justify-start items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div className='mx-3'>
                        <p className='font-bold text-lg'>{name}</p>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;