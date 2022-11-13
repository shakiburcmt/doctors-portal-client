import React from 'react';
import treatment from '../../../assets/images/treatment.png'

const Terms = () => {
    return (
        <div className="hero mt-36">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="rounded-lg shadow-2xl w-1/3" alt="" />
                <div className='w-1/2'>
                    <h1 className="text-3xl font-bold">Exceptional Dental<br ></br>Care, on Your Terms</h1>
                    <p className="py-6 text-justify">A crown is a type of cap that completely covers a real tooth. It's usually made from metal, porcelain fused to metal, or ceramic and is fixed in your mouth. Crowns can be fitted where a tooth has broken, decayed or been damaged, or just to make a tooth look better. To fit a crown, the old tooth will need to be drilled down so it's like a small peg the crown will be fixed on to. It can take some time for the lab to prepare a new crown, so you probably will not have the crown fitted on the same day.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Terms;