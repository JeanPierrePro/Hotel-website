import React from 'react';
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <section style={styles.hero}>
        <h1>Welcome to Hotel XYZ</h1>
        <p>Your perfect place to stay</p>
      </section>
    </div>
  );
};

const styles = {
  hero: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(https://example.com/hero-image.jpg)', // substitua pela sua imagem
    backgroundSize: 'cover',
    color: 'white',
    textAlign: 'center',
  }
};

export default Home;
