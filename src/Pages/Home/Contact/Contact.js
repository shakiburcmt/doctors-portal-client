import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Contact = () => {
    return (
        <section className='mt-36' style={{ background: `url(${appointment})` }}>
            <div className='p-6'>
                <div className='text-center mt-10'>
                    <p className='text-lg text-primary font-bold'>Contact Us</p>
                    <p className='text-3xl text-white mb-10'>Stay connected with us</p>
                </div>
                <div>
                    <form>
                        <div>
                            <input type="text" placeholder="Email address" className="input input-bordered w-1/2 flex mx-auto mb-5" />
                        </div>
                        <div>
                            <input type="text" placeholder="Subject" className="input input-bordered w-1/2 flex mx-auto mb-5" />
                        </div>
                        <div>
                            <textarea className="textarea textarea-bordered w-1/2 flex mx-auto mb-9" placeholder="Your message"></textarea>
                        </div>
                        <div className='flex justify-center mb-16'>
                            <PrimaryButton>Submit</PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;