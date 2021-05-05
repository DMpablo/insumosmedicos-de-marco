import "./app.scss";
import React from "react";

import { NavBar } from "./components/navBar/NavBar.jsx";
import { ItemListContainer } from "./pages/itemListContainier";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ItemDetailContainer } from "./pages/itemDetailContainer";
import Footer from "./components/Footer/Footer";
import CategoryContainer from "./pages/CategoryContainer";
import { ItemList } from "./components/itemList/itemList";

function App() {
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

  return (
    <BrowserRouter>
      <NavBar logo={LOGO} user={USER} />
      <Switch>
        <Route
          path="/itemDetailContainer/:catName/:id"
          component={ItemDetailContainer}
        />
        <Route path="/category/:catName">
          <ItemList />
        </Route>
        <Route path="/category">
          <CategoryContainer />
        </Route>

        <Route path="/contact" component={Footer} />
        <Route exact path="/" component={ItemListContainer} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
