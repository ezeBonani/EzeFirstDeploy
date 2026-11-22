/* eslint-disable react/prop-types */

const Gif = ({ gifData }) => {
  let gif = gifData?.data?.images?.downsized?.url;

  return (
    <>
      <h4>
        <b>Gif:</b>
      </h4>
      {gif !== undefined ? (
        <div>
          <img
            style={{ maxHeight: "220px", maxWidth: "300px" }}
            src={gif}
            alt="gif"
          />
        </div>
      ) : (
        <p style={{ color: "red" }}>
          Ocurrió un error en el gif
          <br /> Pulse Generar nuevamente
        </p>
      )}
    </>
  );
};

export default Gif;
