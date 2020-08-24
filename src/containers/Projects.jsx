import React from 'react';
import Item from '../components/Item';
import '../assets/styles/components/Projects.scss';

const giff = {
  uno: 'src/assets/static/cardValidation.gif',
  dos: 'src/assets/static/cipher.gif',
  tres: 'src/assets/static/pokemonGo.gif',
  cuatro: 'src/assets/static/mdLinks.gif',
  cinco: 'src/assets/static/redSocial.gif',
  seis: 'src/assets/static/burgerApi.gif',
};

const Projects = () => (

  <section className='container-projects'>
    <Item
      img={giff.uno}
      title='POKEMON GO'
      description='Aqui va toda la descripción'
      buttonleft='README'
      buttonright='DESPLIEGUE'
    />
    <Item
      img={giff.dos}
      title='POKEMON GO'
      description='Aqui va toda la descripción'
      buttonleft='README'
      buttonright='DESPLIEGUE'
    />
    <Item
      img={giff.tres}
      title='POKEMON GO'
      description='Aqui va toda la descripción'
      buttonleft='README'
      buttonright='DESPLIEGUE'
    />
    <Item
      img={giff.cuatro}
      title='POKEMON GO'
      description='Aqui va toda la descripción'
      buttonleft='README'
      buttonright='DESPLIEGUE'
    />
    <Item
      img={giff.cinco}
      title='POKEMON GO'
      description='Aqui va toda la descripción'
      buttonleft='README'
      buttonright='DESPLIEGUE'
    />
    <Item
      img={giff.seis}
      title='POKEMON GO'
      description='Aqui va toda la descripción'
      buttonleft='README'
      buttonright='DESPLIEGUE'
    />
  </section>

);

export default Projects;
