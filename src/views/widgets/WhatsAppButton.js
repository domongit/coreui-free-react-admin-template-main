import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';
const WhatsAppButton = ({ phoneNumber }) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Your Message');

     const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
     console.log(whatsappURL);
     window.open(whatsappURL,'_blank');


  };

  return (
    <div>
      <FontAwesomeIcon icon={faWhatsapp} title="Click here to whatsapp {phoneNumber}" onClick={handleWhatsAppClick} style={{ cursor: 'pointer' }} />
    </div>
  );
};
WhatsAppButton.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
};
export default WhatsAppButton;