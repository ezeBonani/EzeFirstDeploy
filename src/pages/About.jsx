import { useNavigate } from "react-router-dom"

export function About ()  {

  const navigate = useNavigate();

  const handleGoBack = () => navigate(-1);
  
  return (
    <div className="about">
      <p>Hecho por Eze Bonani</p>
      <button onClick={handleGoBack} className="regresar-btn">Regresar</button>
    </div>
  )
}

