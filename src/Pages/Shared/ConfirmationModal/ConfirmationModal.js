import React from 'react';
// generic purpose confirmation modal, it works with only data
const ConfirmationModal = ({ title, message, closeModal, modalData, successAction, successActionButton }) => {
    return (
        <div>
            {/* Put this part before </body> tag */}
            < input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => successAction(modalData)} htmlFor="confirmation-modal" className="btn">{successActionButton}</label>
                        <button onClick={closeModal} className='btn btn-outline'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;