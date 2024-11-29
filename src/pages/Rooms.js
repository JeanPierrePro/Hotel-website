import React from 'react';
import Header from '../components/Header';
import RoomCard from '../components/RoomCard';

const Rooms = () => {
  return (
    <div>
      <Header />
      <section style={styles.rooms}>
        <h2>Our Rooms</h2>
        <div style={styles.roomList}>
          <RoomCard roomName="Deluxe Room" price="$150/night" />
          <RoomCard roomName="Standard Room" price="$100/night" />
          <RoomCard roomName="Suite" price="$250/night" />
        </div>
      </section>
    </div>
  );
};

const styles = {
  rooms: {
    padding: '20px',
    textAlign: 'center',
  },
  roomList: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
  }
};

export default Rooms;
