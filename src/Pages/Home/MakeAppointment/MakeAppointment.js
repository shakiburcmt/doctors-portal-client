import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='mt-[169px]'
        style={{background:`url(${appointment})`}}
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="rounded-lg shadow-2xl hidden lg:block lg:w-1/2 -mt-32" alt=""/>
                    <div>
                        <h3 className='text-lg font-bold text-primary'>Appointment</h3>
                        <h1 className="text-4xl font-bold text-white">Make an appointment Today</h1>
                        <p className="py-6 text-white">Twice a year, we all have to make an appointment to visit the dentist for our dental health. These appointments are a standard part of maintaining and improving your health, which means that you want to make sure that you visit every six months or so—or sooner if you have a problem. Before you can go visit the dentist to get your teeth cleaned, you will need to make an appointment. Let us explore the ways that you can make an appointment to visit the dentist.</p>
                        <PrimaryButton>get started</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;