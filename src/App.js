import React, { useState, useEffect } from "react";

const App = () => {
  const [ipAddress, setIpAddress] = useState("");
  
  const URL = "https://script.google.com/macros/s/AKfycbxGAVSKrbSqiv0ZnMPUhJt8RzclvCNRD4oQtDMCOXzJzJ576FxbFwKJuUVV3Vt-U3ts/exec";

  // Funktio hakee käyttäjän IP-osoitteen
  const fetchIpAddress = async () => {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      setIpAddress(data.ip); // Päivitetään IP-osoite
    } catch (error) {
      console.error("Virhe IP-osoitteen haussa:", error);
      setIpAddress("IP-osoitteen haku epäonnistui");
    }
  };

  const postReq = async () => {
    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        
        body: JSON.stringify({name: "uusi", email: "30.11.2024"}),
      });

      const result = await response.json();
      if (result.result === 'Success') {
      } else {
        console.log("Ei onnistunut");
      }
    } catch (error) {
      console.log('Virhe: ' + error.message);
    }

  }

  // Käynnistetään IP-osoitteen haku, kun komponentti renderöityy
  useEffect(() => {

    fetchIpAddress();
    postReq();
  }, []);

  // Lähetetään POST-pyyntö, kun IP-osoite päivittyy
  

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Käyttäjän IP-osoite</h1>
      {ipAddress ? (
        <p>
          IP-osoitteesi on: <strong>{ipAddress}</strong>
        </p>
      ) : (
        <p>Ladataan...</p>
      )}
    </div>
  );
};

export default App;
