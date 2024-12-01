import React, { useEffect } from "react";

const App = () => {
  
  const URL = "https://script.google.com/macros/s/AKfycbxGAVSKrbSqiv0ZnMPUhJt8RzclvCNRD4oQtDMCOXzJzJ576FxbFwKJuUVV3Vt-U3ts/exec";

  // Funktio hakee käyttäjän IP-osoitteen
 

  const postReq = async () => {
    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        
        body: JSON.stringify({name: "uusi", email: "3245.2024"}),
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

  useEffect(() => {
    postReq();
  }, []);


  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hei</h1>
      <div>Hei</div>
    </div>
  );
};

export default App;
