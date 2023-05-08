import Image from "../Sportditutti-quartieri-inclusione.jpg";

function Home() {
  return (
    <div style={{ position: "relative" }}>
      <img
        src={Image}
        alt="immagine sport"
        className="w-100"
        style={{ height: "40em" }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "1",
          textAlign: "center",
        }}
      >
        <h2 className="HomeText">PRENOTA ONLINE IL TUO CAMPO DA GIOCO</h2>
        <h3 className="HomeText">NON TROVI ABBASTANZA COMPAGNI?</h3>
        <h4 className="HomeText">NON TI PREOCUPARE, CI PENSIAMO NOI!!</h4>
      </div>
    </div>
  );
}

export default Home;
