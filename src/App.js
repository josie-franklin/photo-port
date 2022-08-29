import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;

// npm install @testing-library/react @testing-library/jest-dom --save-dev