import React, { useState } from 'react';
import './EventoModal.css'; 

const initialFormState = {
  titulo: '',
  descricao: '',
  tipo: 'estudo',
  prioridade: 'media',
  dataHora: '',
  duracao: 60,
};

const EventoModal = ({ onClose }) => {
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: id === 'duracao' ? Number(value) : value, 
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do Evento a serem enviados:', formData);
    // Aqui você integraria sua API ou lógica de estado global (Redux, Context, etc.)
    
    // Simula o sucesso e fecha o modal
    alert(`Evento "${formData.titulo}" criado com sucesso!`);
    onClose(); 
  };

  return (
    <div className="event-modal">
      
      <div className="modal-header">
        <div className="modal-title-row">
          <h2>Criar Novo Evento</h2>
          
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <p>Adicione um novo evento à sua agenda</p>
      </div>

      <form id="createEventForm" onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            id="titulo"
            className="input-title"
            value={formData.titulo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            value={formData.descricao}
            onChange={handleChange}
          />
        </div>

        <div className="row-fields">
          <div className="form-group">
            <label htmlFor="tipo">Tipo</label>
            <select
              id="tipo"
              value={formData.tipo}
              onChange={handleChange}
              required
            >
              <option value="estudo">Sessão de Estudo</option>
              <option value="prova">Prova</option>
              <option value="trabalho">Trabalho</option>
              <option value="sono">Sono</option>
              <option value="exercicio">Exercício</option>
              <option value="evento">Evento</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="prioridade">Prioridade</label>
            <select
              id="prioridade"
              value={formData.prioridade}
              onChange={handleChange}
              required
            >
              <option value="alta">Alta</option>
              <option value="media">Média</option>
              <option value="baixa">Baixa</option>
            </select>
          </div>
        </div>

        <div className="row-fields">
          <div className="form-group">
            <label htmlFor="dataHora">Data e Hora</label>
            <div className="date-time-input-group">
              <input
                type="text" 
                id="dataHora"
                placeholder="dd/mm/aaaa --:--"
                value={formData.dataHora}
                onChange={handleChange}
                required
              />
              <span className="calendar-icon">📅</span>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="duracao">Duração (minutos)</label>
            <input
              type="number"
              id="duracao"
              min="5"
              value={formData.duracao}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button type="submit" className="create-event-btn">
          Criar Evento
        </button>
      </form>
    </div>
  );
};

export default EventoModal;