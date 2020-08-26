import React from 'react';
import '../assets/styles/App.scss';
import '../assets/styles/components/Home.scss';

const Home = () => (
  <>
    <section className='home-content'>
      <section className='container-home'>
        <div className='texts'>
          <h1 className='title'> Diana Martinez</h1>
          <h2 className='subtitle'>FrontEnd Developer</h2>
        </div>
        <div className='sesgo-down' />
      </section>
      <section className='background'>
        <img src='https://user-images.githubusercontent.com/60928490/91259120-79bd0300-e733-11ea-987b-7c82cd4af37b.png' alt='' />
      </section>
      <section className='container-description'>
        <section className='aboutme'>
          <div className='content'>
            <h2 className='hello'>Hola Soy Diana</h2>
            <h3 className='slogan'>mi Slogan</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>¡ Hacerlo con pasión o nada !</p>
          </div>
        </section>
        <section className='gallery' />
      </section>

    </section>

  </>

);

export default Home;
