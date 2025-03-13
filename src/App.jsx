import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");

  // Function to get name from URL params
  const getNameFromParams = () => {
    const queryParams = new URLSearchParams(window.location.search);
    return queryParams.get("name");
  };

  // Function to prompt user for name
  const promptForName = () => {
    const userName = prompt("Please enter your name:");
    if (userName) {
      setName(userName);
    } else {
      alert("Name is required to proceed!");
      promptForName(); // Keep prompting until a name is entered
    }
  };

  useEffect(() => {
    const nameFromParams = getNameFromParams();
    if (nameFromParams) {
      setName(nameFromParams);
    } else {
      promptForName();
    }
  }, []);

  return (
    <div className="container">
      <div className="kid"></div>

      {/* Color blasts */}
      {[...Array(5)].map((_, index) => (
        <div key={index} className="color-blast"></div>
      ))}

      <div className="holi-greeting">
        <h1 className="animated-text">
          Happy Holi, <span className="name">{name}!</span>
        </h1>
        <p className="subtext">May your life be filled with colors and joy!</p>
      </div>
    </div>
  );
};

export default App;
