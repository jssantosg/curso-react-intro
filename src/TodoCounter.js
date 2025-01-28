import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  const extraText = total == completed && total > 0 ? [<br/>,"You are a PRO!"] : '';

  return (
    <h1 className='TodoCounter'>
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs {extraText}
    </h1>
  );
}

export { TodoCounter }; // Este es un export nombrado