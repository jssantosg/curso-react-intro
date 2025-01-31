import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);

  const extraText = totalTodos === completedTodos && totalTodos > 0 ? [<br />, "You are a PRO!"] : '';

  return (
    <h1 className='TodoCounter'>
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs {extraText}
    </h1>
  );
}

export { TodoCounter }; // Este es un export nombrado