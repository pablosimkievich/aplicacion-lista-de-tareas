import React from "react";
import '../estilos/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from 'react-use';

function TareaFormulario(props) {

  const [input, setInput] = useLocalStorage('inputValue', '');

  const manejarCambio = e => {
    setInput(e.target.value);
  };

  const manejarEnvio = e => {
    e.preventDefault();

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    };

    setInput('');
    props.onSubmit(tareaNueva);
  };

  return (
    <form
      className='tarea-formulario'
      onSubmit={manejarEnvio}>
      <input
        className='tarea-input'
        type='text'
        placeholder='Escribe una Tarea'
        name='texto'
        value={input}
        onChange={manejarCambio}
      />
      <button className='tarea-boton'>
        Agregar Tarea
      </button>
    </form>
  );
}

export default TareaFormulario;
