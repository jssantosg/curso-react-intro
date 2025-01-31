import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal }) {
  return (
    <button className='CreateTodoButton' onClick={() => {
      setOpenModal(state => !state);
    }}> Crear una nueva tarea </button>
  );
}

export { CreateTodoButton };