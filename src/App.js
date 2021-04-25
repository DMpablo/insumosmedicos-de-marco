import "./app.scss";
import React from "react";
import { NavBar } from "./components/navBar/NavBar.jsx";
import { ContainerGreeting } from "./components/containerGreeting/containerGreeting";
import { ItemListContainer } from "./components/itemListContainer/itemListContainier";

function App() {
  const GREETING = ["insumos", "medicos"];
  const LOGO = ["i", "m"];
  const USER = [
    {
      admin: "si",
      name: "Pepe",
      avatar: "https://via.placeholder.com/200x200/92d19a/ffffff",
    },
    {
      admin: "no",
      name: "lala",
      avatar: "https://via.placeholder.com/200x200/d19292/ffffff",
    },
  ];
  const [itemsLenght, setItemsLenght] = React.useState(0);

  return (
    <div className="app">
      <NavBar logo={LOGO} user={USER} itemsLenght={itemsLenght} />
      <ContainerGreeting name={GREETING} />
      <ItemListContainer setItemsLenght={setItemsLenght} />
    </div>
  );
}
export default App;
