import React, { useState } from 'react';
import Carousel from './Carousel';
import './AuthScreens.css'; 

const MainSlideContent = () => (
    <>
        <h1>Organize sua vida de <span>estudante</span></h1>
        <p>
            Planeje provas, organize horários de estudo, cuide do seu bem-estar e conquiste seus objetivos acadêmicos com a <strong>AgendaUpday</strong>.
        </p>

        <div className="features">
            <div className="feature"><h3>📘 Agenda Inteligente</h3><p>Gerencie provas, trabalhos e estudos</p></div>
            <div className="feature"><h3>🗓️ Planejamento</h3><p>Organize seus horários de estudo</p></div>
            <div className="feature"><h3>💆‍♀️ Bem-estar</h3><p>Controle sono e exercícios</p></div>
            <div className="feature"><h3>🔔 Lembretes</h3><p>Notificações por e-mail e web</p></div>
        </div>
    </>
);

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Submetido:', { email, senha });
  };

  return (
    <main className="container">
      
      <Carousel>

        <MainSlideContent />
        
        <div className="generic-bg-1"></div>
        
        <div className="generic-bg-2"></div>
      </Carousel>

      {/* Lado Direito: Formulário de Login */}
      <section className="right">
        <h2>Entrar</h2>
        <p>Acesse sua agenda pessoal</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Digite seu email.." 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />

          <label htmlFor="senha">Senha</label>
          <input 
            type="password" 
            id="senha" 
            placeholder="••••••••" 
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required 
          />

          <button type="submit">Entrar</button>

          <p className="login-text">Não tem conta? <a href="/cadastro">Cadastre-se</a></p>
        </form>

        <p id="mensagem"></p>
      </section>
    </main>
  );
};

export default LoginScreen;
