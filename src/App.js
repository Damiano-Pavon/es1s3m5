import React, { useState } from "react";
import Navigation from "./components/navbar/Navigation";
import MyFooter from "./components/footer/MyFooter";
import Welcome from "./components/Welcome/Welcome";
import Books from "./components/AllBooks/AllTheBooks";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <Navigation onSearchChange={handleSearchChange} />
      <Welcome />
      <Books searchTerm={searchTerm} />
      <MyFooter />
    </div>
  );
}

export default App;
