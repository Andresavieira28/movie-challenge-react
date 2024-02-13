import React from 'react';
import { Link } from 'react-router-dom';
import "./movie.css";

const Movie = () =>{
  return (
    <div>
      <header >
        <nav className='navbar'>
          <ul className='ulNav'>
            <li>
              <Link to="/" className='btnMenu'><img src='img/inicio.png' alt='Inicio'/></Link>
            </li>
            <li>
              <Link to="/serie" className='btnMenu'><img src='img/série.png' alt="Séries"/></Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className='contentPage'> 
        <section className='infoMovie'>
          <h1>Banco de dados em construção...</h1>
          <p>Aguarde!</p>
        </section>
      </main>
    </div>
  );
};

export default Movie;