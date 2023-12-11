import React from 'react';
import Modal from 'react-modal';

const CertificateModal = ({ isOpen, onClose, technology, certificate }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h2>{technology} Certificate</h2>
      {/* Add more details or display the certificate image */}
      <img src={certificate} alt={`${technology} Certificate`} />
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default CertificateModal;
