import React from 'react';

const Map = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.881184772404!2d80.95595667485468!3d26.907265660325677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999578820ca5a2b%3A0x1541482a0b35d3d4!2sNEO%20HOSPITAL%20LUCKNOW!5e0!3m2!1sen!2sbd!4v1701410053223!5m2!1sen!2sbd"
        width="100%"
        height="550"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
