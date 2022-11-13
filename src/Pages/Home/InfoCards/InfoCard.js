import React from 'react';

const InfoCard = ({ card }) => {
    const { name, description, icon, bgClass } = card;
    return (
        <div className={`card w-960 ${bgClass} text-white shadow-xl`}>
            <div className="card-body">
                <div className='lg:flex items-center gap-5'>
                    <div className='flex justify-center mb-3'>
                        <img className='h-[77px] w-[77px]' src={icon} alt="" />
                    </div>
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;