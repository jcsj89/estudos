import React, { Component } from 'react';

// form
// eslint-disable-next-line import/no-duplicates
import { FaPlus } from 'react-icons/fa';
// tarefas
// eslint-disable-next-line import/no-duplicates
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import './Main.css';

export default class Main extends Component {
    // eslint-disable-next-line react/state-in-constructor
    state = {
      novaTarefa: '',
      tarefas: [
      ],
    };

    handleSubmit = (e) => {
      e.preventDefault();
      const { tarefas } = this.state;
      let { novaTarefa } = this.state;
      novaTarefa = novaTarefa.trim();

      if (tarefas.indexOf(novaTarefa) !== -1) return;

      const novasTarefas = [...tarefas];

      this.setState({
        // eslint-disable-next-line react/no-unused-state
        tarefas: [...novasTarefas, novaTarefa],
      });
    }

    handleChange = (e) => {
      this.setState({
        novaTarefa: e.target.value,
      });
    }

    render() {
      const { novaTarefa, tarefas } = this.state;

      return (
        <div className="main">
          <h1>Lista de tarefas</h1>

          <form onSubmit={this.handleSubmit} action="#" className="form">
            <input
              onChange={this.handleChange}
              type="text"
              value={novaTarefa}
            />
            <button type="submit">
              <FaPlus />
            </button>
          </form>

          <ul className="tarefas">
            {tarefas.map((tarefa) => (
              <li key={tarefa}>
                {tarefa}
                <span>
                  <FaEdit className="edit" />
                  <FaWindowClose className="delete" />
                </span>
              </li>
            ))}
          </ul>
        </div>
      );
    }
}
