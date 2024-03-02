import { useEffect, useState } from "react";
import "./App.css";
import FraseGatos from "./component/FraseGatos";
import Gif from "./component/Gif";
import { Link, Outlet } from "react-router-dom";


const urlCat = "https://catfact.ninja/fact";

function App() {
  const [catFact, setCatFact] = useState("");
  const [gifData, setGifData] = useState(null);
  const [loader, setLoader] = useState(false);

  async function catFactApi() {

    const controller = new AbortController();
    const signal = controller.signal;
    setTimeout(() => controller.abort(), 5000);

    try {
      let res = await fetch(urlCat, { signal });

      if (!res.ok) {
        let error = new Error("Error en la petición fetch catFact");
        error.status = res.status || "00-";
        error.statusText = res.statusText || "Ocurrió un error";
        throw error;
      }

      let json = await res.json();
      
      if (!signal.aborted)
        setCatFact(json.fact);

    } catch(error) {
        alert(error);
    }
  }

  async function gifApi(searchGif) {
    const controller = new AbortController();
    const signal = controller.signal;
    setTimeout(()=>controller.abort(),5000);

    try {
      let res = await fetch(searchGif,{signal});

      if(!res.ok){
        let error = new Error("Ocurrió un error!");
        error.status = res.status;
        error.statusText = res.statusText;
        throw error;
      }

      let data = await res.json();

      if(!signal.aborted)
        setGifData(data);

    } catch(error) {
      alert(error);
    } finally {
      setLoader(false);
    }
    //console.log(data);
  }

  useEffect(() => {
    //console.log("llamando catFact");
    catFactApi();
  }, []);

  useEffect(() => {
    if (catFact !== "") {
      //console.log("llamando gifApi");
      let first3 = catFact.split(" ", 3).join("+");
      let searchGif = `https://api.giphy.com/v1/gifs/random?api_key=0ahJfBK8m0B8x5MVdf9G2v458hW5OVIh&tag=${first3}&rating=g`;
      setLoader(true);
      gifApi(searchGif);
    }
  }, [catFact]);

  return (
    <>
      <h1>Eze´s First Deploy</h1>
      <div className="app-container">
        <div className="gif-container">
          {loader ? (
            <div>cargando...</div>
          ) : (
            gifData && <Gif gifData={gifData} />
          )}
          {catFact !== "" && !loader && (
            <p>
              <em>{catFact.split(" ", 3).join(" ")}</em>
            </p>
          )}
        </div>
        <div className="frase-container">
          <FraseGatos catFact={catFact} />
        </div>
      </div>
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={catFactApi}>Generar</button>
      </div>
      <br />
      <br />
      <div className="links">
        <Link to="/enunciado">Enunciado</Link>
        <Outlet/>
        <Link to="/about">Sobre mi</Link>
        <br />
      </div>
    </>
  );
}

export default App;
