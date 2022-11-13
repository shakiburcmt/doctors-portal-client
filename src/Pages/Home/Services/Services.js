import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import ServiceCard from './ServiceCard';

const Services = () => {
    const serviceData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'The process involves painting a varnish containing high levels of fluoride onto the surface of the tooth twice a year to prevent decay.',
            serviceImg: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Your dentist will numb the area and use a numbing gel before injecting a local anesthetic known as Lidocaine. You may feel a bit of a sting, but that is a reaction from the local anesthetic when it starts to block the nerve signals to stop the pain.',
            serviceImg: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'While there may sometimes be side effects, whitening treatment is safe on tooth enamel. The process of tooth whitening is essentially the tooth will become dehydrated, meaning dried out.',
            serviceImg: whitening
        },
    ]
    return (
        <div>
            <div className='mt-32 text-center'>
                <p className='text-primary font-bold  text-xl mb-2'>OUR SERVICES</p>
                <p className='text-3xl'>Services We Provide</p>
            </div>
            <div className='grid lg:grid-cols-3 gap-8 mt-16'>
                {
                    serviceData.map(service => <ServiceCard
                        key={service.id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;