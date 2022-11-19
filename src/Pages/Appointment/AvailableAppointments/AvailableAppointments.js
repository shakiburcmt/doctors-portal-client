import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({ selectedDate }) => {
    // jehetu ekhane map kore AppointmentOption e pathano hoyeche tai modal er state ekhane declare kora hoyeche
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    // jehetu async call tai =[] empty array set kora hoyeche
    // const { data: appointmentOptions = [] } = useQuery({
    //     queryKey: ['appointmentOptions'],
    //     queryFn: () => fetch('http://localhost:5000/appointmentOptions')
    //         .then(res => res.json())
    // })

    // react query with async await,, oporer part er alternative
    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/v2/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

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
                    refetch={refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;