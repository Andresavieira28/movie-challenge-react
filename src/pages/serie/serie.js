import React from 'react';
import { Link } from 'react-router-dom';
import "./serie.css";

const Serie = () =>{
  return (
    <div>
      <header >
        <nav className='navbar'>
          <ul className='ulNav'>
            <li>
              <Link to="/" className='btnMenu'><img src='./img/inicio.png' alt='Inicio'/>Home</Link>
            </li>
            <li>
              <Link to="/movie" className='btnMenu'><img src='./img/filmes.png' alt='Filmes'/>Filmes</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className='contentPage'>
      <section className='infoSerie'>
          <h1>Banco de dados em construção...</h1>
          <p>Aguarde!</p>
        </section>
      </main>
    </div>
  );
};

export default Serie;