import { NavBar } from "./components/navBar/NavBar.jsx";
import { ItemListContainer } from "./pages/itemListContainier";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ItemDetailContainer } from "./pages/itemDetailContainer";
import Footer from "./components/Footer/Footer";
import CategoryContainer from "./pages/CategoryContainer";
import { ItemList } from "./components/itemList/itemList";
import { useContext } from "react";
import { CartContext } from "./context/cartContext";
import "./app.scss";
import Cart from "./pages/cart/Cart.jsx";

function App() {
  const logo = ["i", "m"];
  const user = [
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
  const { quantity } = useContext(CartContext);
  
  return (
    <BrowserRouter>
      <NavBar logo={logo} user={user} quantity={quantity} />
      <Switch>
        <Route
          path="/itemDetailContainer/:catName/:id"
          component={ItemDetailContainer}
        />
        <Route path="/category/:catName">
          <ItemList />
        </Route>
        <Route path='/cart' component={Cart}/>
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
