import React from 'react';
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea';
import '../estilos/ListaDeTareas.css';
import useLocalStorageState from './useLocalStorage';

function ListaDeTareas() {

  const [ tareas, setTareas ] = useLocalStorageState('tareas', []);

  const agregarTarea = tarea => {

    const capitalizeFirstWord = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

    if(tarea.texto.trim()) {
      tarea.texto = capitalizeFirstWord(tarea.texto.trim());
      let tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter( tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if(tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className='tareas-lista-contenedor'>
        {
          tareas?.map( (tarea) =>
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea}
            />
          )
        }
      </div>
    </>
  );
}

export default ListaDeTareas;
