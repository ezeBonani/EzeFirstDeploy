/* eslint-disable react/prop-types */


const Gif = ({gifData}) => {
  //console.log(gifData);
  let gif = gifData.data.images.downsized.url;
  
  return (
    <>
    <h4><b>Gif:</b></h4>
    {gif !== undefined ? <div><img style={{maxHeight:"220px", maxWidth:"300px"}} src={gif} alt="gif"/></div> : <p style={{color:"red"}}>ocurrió un error en el gif<br /> pulse Generar nuevamente</p>}
   </>
  )
}

export default Gif