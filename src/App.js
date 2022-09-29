import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, InputGroup, FormControl, Button, Row, Card } from "react-bootstrap";
import React from "react";
import { useState, useEffect } from "react";

const CLIENT_ID = "e315d009aa0745ae8acc7d89686ca3d7";
const CLIENT_SECRET = "f5e802ca262d4a55875b5be861b02246";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    // API Access Token
    var authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials&client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET,
    };
    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  // Search
  return (
    <div className="App">
      <Container>
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder="Search For Artist"
            type="input"
            onKeyPress={(event) => {
              if (event.key == "Enter") {
                console.log("Pressed enter");
              }
            }}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <Button
            onClick={() => {
              console.log("Clicked Button");
            }}
          >
            Search
          </Button>
        </InputGroup>
      </Container>
      <Container>
        <Row className="mx-2 row row-cols-4">
          <Card>
            <Card.Img src="#" />
            <Card.Body>
              <Card.Title>Album Name</Card.Title>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default App;
