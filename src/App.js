import React, { useEffect, useState } from "react";
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.json';
import CryptoJS from 'crypto-js';

const App = () => {
  
  const URL = "https://script.google.com/macros/s/AKfycbxGAVSKrbSqiv0ZnMPUhJt8RzclvCNRD4oQtDMCOXzJzJ576FxbFwKJuUVV3Vt-U3ts/exec";

  // Funktio hakee käyttäjän IP-osoitteen
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Funktio lomakkeen lähettämistä varten
  const handleSubmit = (e) => {
    e.preventDefault(); // Estetään oletustoiminto, kuten sivun uudelleenlataus
    postReq();
  };

  const generateSHA256Hash = (message) => {
    return CryptoJS.SHA256(message).toString(); 
  };

  const hash = generateSHA256Hash('hello world');
  
  
  const postReq = async () => {
    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        
        body: JSON.stringify({name: username, email: password}),
      });

      const result = await response.json();
      if (result.result === 'Success') {
      } else {
        console.log("Ei onnistunut", hash, data.nimi);
        
      }
    } catch (error) {
      console.log('Virhe: ' + error.message);
    }

  }

  useEffect(() => {

  }, []);


  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4}>
          <h2 className="text-center">Kirjaudu</h2>
          <Form onSubmit={handleSubmit}>
            {/* Käyttäjätunnus */}
            <Form.Group controlId="formUsername">
              <Form.Label>Käyttäjä</Form.Label>
              <Form.Control
                type="text"
                placeholder="Syötä käyttäjätunnus"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>

            {/* Salasana */}
            <Form.Group controlId="formPassword">
              <Form.Label>Koodi</Form.Label>
              <Form.Control
                type="password"
                placeholder="Syötä koodi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            {/* Submit-painike */}
            <Button variant="primary" type="submit" className="w-100 mt-3">
              Kirjaudu
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
