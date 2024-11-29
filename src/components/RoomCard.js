import React from 'react';

const RoomCard = ({ roomName, price }) => {
  return (
    <div style={styles.card}>
      <h3>{roomName}</h3>
      <p>{price}</p>
      <button style={styles.button}>Book Now</button>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '20px',
    width: '200px',
    textAlign: 'center',
  },
  button: {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#5c6bc0',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  }
};

export default RoomCard;
