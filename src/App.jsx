import { useState } from "react";

const App = () => {
  // hook -> use .....
  //state -> useState

  const [inputsState, setInputsState] = useState({
    title: "",
    date: "",
    note: "",
  });
  let initialState = JSON.parse(localStorage.getItem("notas")) || [];
  const [notas, setNotas] = useState(initialState);

  const handleInputChange = (event) => {
    setInputsState({ ...inputsState, [event.target.name]: event.target.value });
  };

  const handleClickLimpiar = (event) => {
    setInputsState({ title: "", date: "", note: "" });
  };

  const handleClickGuardar = () => {
    setNotas([...notas, inputsState]);
    localStorage.setItem("notas", JSON.stringify(notas));
    handleClickLimpiar();
  };

  const handleRemoveNote = (index) => {
    const nuevoArreglo = [];
    notas.forEach((nota, i) => {
      if (index !== i) {
        nuevoArreglo.push(nota);
      }
    });
    localStorage.setItem("notas", JSON.stringify(nuevoArreglo));
    setNotas(nuevoArreglo);
  };

  return (
    <div className="App container">
      <div className="row">
        <div className="col">
          <h3>lista</h3>
          <ul>
            {notas.map((nota, index) => {
              return (
                <li key={index}>
                  {nota.title} ({nota.date}) {nota.note} &nbsp;
                  <i
                    className="bi-x-circle"
                    onClick={() => handleRemoveNote(index)}
                    style={{
                      color: "red",
                      cursor: "pointer",
                      fontSize: "0.75rem",
                    }}
                  >
                    {" "}
                  </i>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col">
          <h3>Notas</h3>
          <label className="mb-2" style={{ width: "100%" }}></label>
          <label style={{ width: "100%" }}>
            Titulo
            <input
              id="title"
              name="title"
              type="text"
              onChange={handleInputChange}
              value={inputsState.title}
              style={{ width: "100%" }}
            />
          </label>
          <br />
          <label className="mb-2" style={{ width: "100%" }}>
            Fecha
            <input
              id="date"
              name="date"
              type="date"
              onChange={handleInputChange}
              value={inputsState.date}
              style={{ width: "100%" }}
            />
          </label>
          <br />
          <label style={{ width: "100%" }}>
            Nota
            <textarea
              id="note"
              name="note"
              type="text"
              onChange={handleInputChange}
              value={inputsState.note}
              style={{ width: "100%" }}
            />
          </label>
          <hr />
          <div className="row">
            <span className="col">
              <button
                className="btn btn-primary me-2"
                onClick={handleClickLimpiar}
                style={{ width: "100%" }}
              >
                limpiar
              </button>
            </span>
            <span className="col">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClickGuardar}
                style={{ whith: "100%" }}
              >
                Guardar
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
