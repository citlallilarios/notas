import {useState} from 'react'
const App = ()=> {
  // hook -> use.....
  //state -> useState

  const [inputsState, setInputsState] = useState({
    title: "",
    date: "",
    note: ""
  });
  

  const handleInputChange = (event) => {
   setInputsState({...inputsState, [event.target.name]: event.target.value });
  };
  const handleClickr = (event) => {
    setInputsState({title: "",
    date: "",
    note: ""});
   };
  

  return (
    <div className="App container">
      <div classNmae="row">
        <div className="col">
          <h3>Listas</h3>
        </div>
      
      <div className="col">
        <label className="mb-2">
        </label>
      
        <h3>Nota</h3>
        <label>
          Titulo
        <input 
        id="title" 
        name="title" 
        type="text" 
        onChange={handleInputChange}
        value={inputsState.title}
         />
         </label>
        <br />
      
         <label className="mb-2"> 
          Fecha
        <input 
        id="date" 
        name="date" 
        type="text" 
        onChange={handleInputChange}
        value={inputsState.date}
         />
         </label>
         <br />
         <label>
           Notas
        <input 
        id="note" 
        name="note" 
        type="text" 
        onChange={handleInputChange}
        
        value={inputsState.note}
         />
         </label>
         </div>
         </div>
         <hr />
         <div className="row">
         <button className="btn btn-primary me-2" onClick={ handleClickr}>Limpiar </button> </div>
    </div>
  );
}

export default App;
