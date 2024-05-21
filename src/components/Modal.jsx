import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Modal = ({ isOpen, onClose, children }) => {
  const [isModalOpen, setModalOpen] = useState(isOpen);

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  const closeModal = () => {
    setModalOpen(false);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          {/* Modal */}
          <div className="relative bg-gray-100 text-gray-600 mx-5 p-14 rounded-lg shadow-lg">
            {/* Close button */}
            <button className="absolute text-4xl top-0 right-4 text-gray-600 hover:text-emerald-500 ease-in-out duration-150" onClick={closeModal}>
              &times;
            </button>

            {/* Modal content */}
            <div>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
