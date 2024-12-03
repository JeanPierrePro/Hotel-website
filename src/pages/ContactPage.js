import React from 'react';
import Header from '../components/Header';

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us:</p>
      <ul>
        <li>
          <strong>Email:portuga0462016@gmail.com</strong> contact@hotelxyz.com
        </li>
        <li>
          <strong>Phone:</strong> +123 456 7890
        </li>
        <li>
          <strong>Address:</strong> 123 Luxury St., Paradise City
        </li>
      </ul>
    </div>
  );
};

export default ContactPage;
