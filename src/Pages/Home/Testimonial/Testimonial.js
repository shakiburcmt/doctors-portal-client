import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {
    const TestimonialData = [
        {
            description: 'The staff was very friendly and welcoming. They cleaned my teeth really well and were kind as well as professional. Will definitely continue to come regularly.',
            name: 'Wilson Harry',
            location: 'California',
            img: people1

        },
        {
            description: ' I have never experienced a great service like Trusted dental starting from front desk to the Dr. Dr G is the best of the best. I thank all of you for the great service you provide.',
            name: 'Matt Henry',
            location: 'New York',
            img: people2

        },
        {
            description: 'I have been coming here for 3 years and have never had a bad experience. Staff are extremely friendly and professional and make you feel comfortable during the entire visit.',
            name: 'Hilary Clinton',
            location: 'Houston',
            img: people3

        },
    ]
    return (
        <section className='mt-20'>
            <div className='flex justify-between'>
                <div>
                    <p className='text-primary font-bold text-lg'>Testimonial</p>
                    <p className='text-3xl'>What Our Patients Says</p>
                </div>
                <div>
                    <figure>
                        <img className='lg:w-[192px] w-24 h-[156px]' src={quote} alt="" />
                    </figure>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 gap-14 mx-20'>
                {
                    TestimonialData.map(td => <Review
                        key={td.id}
                        review={td}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;