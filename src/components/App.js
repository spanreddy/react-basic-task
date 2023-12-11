import "../index.css";
import React, { useState } from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import CardList from "./CardList";

function App() {
  const [contacts, setcontacts] = useState([]);
  return (
    <div className="App">
      <Header />
      <AddContact />
      <CardList contacts={contacts} />
    </div>
  );
}

export default App;
