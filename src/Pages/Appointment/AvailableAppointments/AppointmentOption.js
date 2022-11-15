import React from 'react';

const AppointmentOption = ({ option, setTreatment }) => {
    const { name, slots } = option;
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <h2 className="card-title justify-center text-secondary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : "Try another day"}</p>
                <p>{slots.length} {slots.length > 1 ? "spaces" : "space"} available</p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        htmlFor="booking-modal" className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white"
                        onClick={() => setTreatment(option)}
                    >Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;