import React, { useState } from 'react';
import JAVASCRIPT from '../assets/javascript.png';
import CSS from '../assets/css.png';
import mongo from '../assets/mongo.png'
import CertificateModal from './Certificatemodel';
import jscertificate from '../assets/jscer.png'
import Googlecloud from '../assets/googlecloud.png'
import Mongocer from '../assets/Mongocer.png'

const Certificate = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedTechnology, setSelectedTechnology] = useState(null);

  const openModal = (technology) => {
    setSelectedTechnology(technology);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedTechnology(null);
    setModalIsOpen(false);
  };

  const technologies = [
    { name: 'Javascript', icon: JAVASCRIPT, certificate: jscertificate },
    { name: 'Googlecloud', icon: CSS, certificate: Googlecloud },
    { name: 'MongoDB', icon: mongo, certificate: Mongocer },
    // Add more technologies as needed
  ];

  return (
    <div name='certificate' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Certificate</p>
          <p className='py-4'>// These are the Certificate</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
              onClick={() => openModal(tech.name)}
            >
              <img className='w-20 mx-auto' src={tech.icon} alt={`${tech.name} icon`} />
              <p className='my-4'>{tech.name}</p>
            </div>
          ))}
        </div>

        <CertificateModal
          isOpen={modalIsOpen}
          onClose={closeModal}
          technology={selectedTechnology}
          certificate={technologies.find((tech) => tech.name === selectedTechnology)?.certificate}
        />
      </div>
    </div>
  );
};

export default Certificate;
