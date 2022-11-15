import { format } from 'date-fns';
import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);

    // jehetu ekhane map kore AppointmentOption e pathano hoyeche tai modal er state ekhane declare kora hoyeche
    const [treatment, setTreatment] = useState(null);

    useState(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])
    return (
        <section className='mt-24'>
            <p className='text-center text-primary font-semibold'>Available Appointments on {format(selectedDate, 'PP')}</p>

            <div className='grid gap-6 lg:grid-cols-3 mx-12 mt-24 text-center'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {/* state e null deway render korte parbe na tai null na diye object dite hobe or nicher moto conditional rendering korte hobe man jodi thake tahole modal dekhabe */}
            {
                treatment &&
                <BookingModal
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;