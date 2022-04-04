import React, { useState } from "react";
import "./index.css";
import { Navbar } from "./components/Navbar";
import { Routess } from "./components/Routes";
import { Footer } from "./components/Footer";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <h1 className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routess />
        <Footer />
      </div>
    </h1>
  );
};

export default App;
