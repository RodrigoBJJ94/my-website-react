import React from 'react';
import './App.css';
import { default as HomeSvg } from './assets/img/HomeSvg.svg';

export default function App() {
  return (
    <>
      <aside className="menu white-background">
        <div className="main-content menu-content">
          <h1><a href="#home">HOME</a></h1>
          <nav>
            <ul>
              <li><a href="#mobile">Mobile</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#games">Games</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </aside>
      <div className="menu-spacing"></div>
      <section id="home" className="intro main-background section">
        <div className="main-content intro-content">
          <div className="intro-text-content">
            <h2>Developer</h2>
            <p className="tab">I'm a front-end and mobile developer, in addition I have knowledge in back-end and database</p>
            <p className="tab">I have intermediate knowledge in HTML, CSS and Javascript languages, React Native and ReactJS libraries and GitHub Desktop</p>
            <p className="tab">I have basic knowledge of Typescript and Python languages, MongoDB and PostgreSQL databases and NodeJS</p>
          </div>
          <div className="main-background-svg" >
            <img src={HomeSvg} alt="" className="main-background-svg" />
          </div>
        </div>
      </section>
      <section id="mobile" className="white-background section apps-back">
        <div className="main-content grid-one-content mobile">
          <h2>Mobile</h2>
          <p className="grid-description">Below are my Android apps and games, developed in React Native</p>
          <h4><a href="https://play.google.com/store/apps/details?id=com.ticTacToeJogoDaVelha" target="_blank" rel="noreferrer">Tic Tac Toe</a></h4>
          <h4><a href="https://play.google.com/store/apps/details?id=com.calculatorCalculadoraCalculator" target="_blank" rel="noreferrer">Calculator</a></h4>
          <h4><a href="https://play.google.com/store/apps/details?id=com.calculatorOfImc" target="_blank" rel="noreferrer">Calculator of IMC</a></h4>
          <h4><a href="https://play.google.com/store/apps/details?id=com.gasolinaOuEtanol" target="_blank" rel="noreferrer">Gasolina or Ethanol</a></h4>
          <h4><a href="https://play.google.com/store/apps/details?id=com.headsOrTailsCaraOuCoroa" target="_blank" rel="noreferrer">Heads or Tails</a></h4>
        </div>
      </section>
      <section id="projects" className="grid-one main-background section">
        <div className="main-content grid-one-content">
          <h2>Projects</h2>
          <p className="grid-description">Below are some of my projects</p>
          <h4><a href="https://rodrigobrentano-pomodoro.netlify.app" target="_blank" rel="noreferrer">Pomodoro</a></h4>
          <h4><a href="https://rodrigobrentano-calculator.netlify.app" target="_blank" rel="noreferrer">Calculator</a></h4>
          <h4><a href="https://rodrigobrentano-calculadora-de-imc.netlify.app" target="_blank" rel="noreferrer">Calculator of BMI</a></h4>
          <h4><a href="https://rodrigobrentano-lista-de-tarefas.netlify.app" target="_blank" rel="noreferrer">To-do List</a></h4>
          <h4><a href="https://rodrigobrentano-relogio-digital.netlify.app" target="_blank" rel="noreferrer">Digital Watch</a></h4>
          <h4><a href="https://rodrigobrentano-timer.netlify.app" target="_blank" rel="noreferrer">Timer</a></h4>
        </div>
      </section>
      <section id="games" className="grid-one white-background section back">
        <div className="main-content grid-one-content">
          <h2 className="grid-main-heading">Games</h2>
          <p className="grid-description">Below are some of my games</p>
          <div className="games">
            <h4><a href="https://rodrigobrentano-jogo-da-velha.netlify.app" target="_blank" rel="noreferrer">Tic Tac Toe - 2 Player</a></h4>
            <h4><a href="https://rodrigobrentano-jogo-da-velha-versus-cpu.netlify.app" target="_blank" rel="noreferrer">Tic Tac Toe - vs CPU</a></h4>
            <h4><a href="https://rodrigobrentano-ping-pong.netlify.app" target="_blank" rel="noreferrer">Ping Pong - for Computer</a></h4>
            <h4><a href="https://rodrigo-brentano-jogo-da-nave.netlify.app" target="_blank" rel="noreferrer">Ship Game - for Computer</a></h4>
          </div>
        </div>
      </section>
      <section id="contact" className="intro main-background section">
        <div className="main-content intro-contact">
          <div className="intro-text-content contact">
            <h2>Contact</h2>
            <p><strong>WhatsApp:</strong>  +55 51 992191122</p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/rodrigo-brentano-26a7ba204/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/rodrigo-brentano-26a7ba204/</a></p>
            <p><strong>Email:</strong> rodrigobjj24@gmail.com</p>
            <p><strong>GitHub:</strong> <a href="https://github.com/RodrigoBJJ94" target="_blank" rel="noreferrer">https://github.com/RodrigoBJJ94</a></p>
          </div>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </section>
      <footer className="footer white-background">
        <p>Created by Rodrigo Brentano</p>
      </footer>
      <a href="#home" className="back-to-top">➤</a>
    </>
  );
};
