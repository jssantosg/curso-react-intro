import './CreateTodoButton.css';

function CreateTodoButton() {
  return (
    <button className='CreateTodoButton' onClick={(event) => {
      console.log('Le diste clic');
      console.log(event);
      console.log(event.target)
    }}> Crear una nueva tarea </button>
  );
}

export { CreateTodoButton };