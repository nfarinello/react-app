import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
   <div className="App">
    <div className="container">
    <Weather defaultCity="London" />

    <footer>
      <p>This is a website built by <a href="https://jolly-wing-8b84f9.netlify.app" target="_blank"
      alt="Nicoles personal website/portfolio" rel="noreferrer">Nicole Farinello </a> and is
      <a href="https://github.com/nfarinello/react-app" target="_blank" rel="noreferrer"> Open-Sourced</a>
      </p>
    </footer>
    </div>
    </div>
  );
}
