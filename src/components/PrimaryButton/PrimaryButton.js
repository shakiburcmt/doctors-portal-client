import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">{children}</button>
        // Component er majhkhane kichu likha mane children ,,, ete subidha hoy children hisabe likha change kora jay kintu design same thake
    );
};

export default PrimaryButton;