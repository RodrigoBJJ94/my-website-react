import React from 'react';
import './App.css';

export default function App() {
  return (
    <>
      <input type="checkbox" className="close-menu" />
      <label htmlFor="close-menu-label" title="Close Menu" className="close-menu-label" ></label>
      <aside className="menu white-background">
        <div className="main-content menu-content">
          <h1 onClick=""><a href="#home">HOME</a></h1>
          <nav>
            <ul>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#games">Games</a></li>
              <li><a href="#mobile">Mobile</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </aside>
      <div className="menu-spacing"></div>
      <section className="intro main-background section">
        <div className="main-content intro-content">
          <div className="intro-text-content">
            <h2>Developer</h2>
            <p>Sou um desenvolvedor front-end e mobile, além disso possuo conhecimento em
              back-end e banco de dados</p>
            <p>Possuo conhecimento intermediário nas linguagens HTML, CSS e Javascript, na biblioteca
              React Native e na tecnologia GitHub Desktop.</p>
            <p>Possuo conhecimento básico na biblioteca ReactJS, nas linguagens Typescript, Python e Java, nos bancos de dados MongoDB e PostgreSQL e em NodeJS.</p>
          </div>
          <div className="intro-img2">
            <img src="" alt="" />
          </div>
        </div>
      </section>
      <section className="grid-one white-background section back">
        <div className="main-content grid-one-content">
          <h2>Projects</h2>
          <p>Segue abaixo alguns dos meus projetos</p>
          <h4><a href="https://rodrigobrentano-pomodoro.netlify.app" target="_blank" rel="noreferrer">Pomodoro</a></h4>
          <h4><a href="https://rodrigobrentano-calculator.netlify.app" target="_blank" rel="noreferrer">Calculator</a></h4>
          <h4><a href="https://rodrigobrentano-calculadora-de-imc.netlify.app" target="_blank" rel="noreferrer">Calculator of BMI</a></h4>
          <h4><a href="https://rodrigobrentano-lista-de-tarefas.netlify.app" target="_blank" rel="noreferrer">To-do List</a></h4>
          <h4><a href="https://rodrigobrentano-relogio-digital.netlify.app" target="_blank" rel="noreferrer">Digital Watch</a></h4>
          <h4><a href="https://rodrigobrentano-timer.netlify.app" target="_blank" rel="noreferrer">Timer</a></h4>
        </div>
      </section>
      <section className="grid-one main-background section">
        <div className="main-content grid-one-content">
          <h2 className="grid-main-heading">Games</h2>
          <p className="grid-description">Segue abaixo alguns dos meus jogos</p>
          <div className="games">
            <h4><a href="https://rodrigobrentano-jogo-da-velha.netlify.app" target="_blank" rel="noreferrer">Tic Tac Toe - 2 Player</a></h4>
            <h4><a href="https://rodrigobrentano-jogo-da-velha-versus-cpu.netlify.app" target="_blank" rel="noreferrer">Tic Tac Toe - vs CPU</a></h4>
            <h4><a href="https://rodrigobrentano-ping-pong.netlify.app" target="_blank" rel="noreferrer">Ping Pong - for Computer</a></h4>
            <h4><a href="https://rodrigo-brentano-jogo-da-nave.netlify.app" target="_blank" rel="noreferrer">Ship Game - for Computer</a></h4>
          </div>
        </div>
      </section>
      <section className="white-background section apps-back">
        <div className="main-content grid-one-content">
          <h2>Mobile</h2>
          <p className="grid-description">Segue abaixo meus aplicativos e jogos Android, desenvolvidos em React Native</p>
          <h4><a href="https://play.google.com/store/apps/details?id=com.ticTacToeJogoDaVelha" target="_blank" rel="noreferrer">Tic Tac Toe</a></h4>
          <h4><a href="https://play.google.com/store/apps/details?id=com.calculatorCalculadoraCalculator" target="_blank" rel="noreferrer">Calculator</a></h4>
          <h4><a href="https://play.google.com/store/apps/details?id=com.calculatorOfImc" target="_blank" rel="noreferrer">Calculator of IMC</a></h4>
          <h4><a href="https://play.google.com/store/apps/details?id=com.gasolinaOuEtanol" target="_blank" rel="noreferrer">Gasolina or Ethanol</a></h4>
          <h4><a href="https://play.google.com/store/apps/details?id=com.headsOrTailsCaraOuCoroa" target="_blank" rel="noreferrer">Heads or Tails</a></h4>
        </div>
      </section>
      <section className="intro main-background section">
        <div className="main-content intro-content">
          <div className="intro-text-content contact">
            <h2>Contact</h2>
            <p>WhatsApp: 51 992191122</p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/rodrigo-brentano-26a7ba204/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/rodrigo-brentano-26a7ba204/</a></p>
            <p>Email: rodrigobjj24@gmail.com</p>
            <p>GitHub: <a href="https://github.com/RodrigoBJJ94" target="_blank" rel="noreferrer">https://github.com/RodrigoBJJ94</a></p>
          </div>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </section>
      <footer className="footer white-background">
        <p>Create for Rodrigo Brentano</p>
      </footer>
      <a href="#" className="back-to-top">➤</a>
    </>
  );
};
