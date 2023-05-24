import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
import './estilos/Tarea.css';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
  
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
          <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
