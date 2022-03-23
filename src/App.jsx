import {useState} from 'react'
const App = ()=> {
  // hook -> use.....
  //state -> useState

  const [state, setState] = useState("");

  const handleInputChage = (event) => {
   setState(event.target.value);

  };

  return (
    <div className="App">
        <h3>notas</h3>
        <label>
           Input de prueba 
        <input 
        id="pruebaID" 
        name="prueba" 
        type="text" 
        onChange={handleInputChage}
        value={state}
         />
         </label>
    </div>
  );
}

export default App;
