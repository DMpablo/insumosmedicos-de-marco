import { ItemDetailContainer } from "./pages/itemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ItemListContainer } from "./pages/itemListContainier";
import CategoryContainer from "./pages/CategoryContainer";
import { ItemList } from "./components/itemList/itemList";
import { NavBar } from "./components/navBar/NavBar.jsx";
import { CartContext } from "./context/cartContext";
import Footer from "./components/Footer/Footer";
import Cart from "./pages/cart/Cart.jsx";
import { useContext } from "react";
import "./app.scss";

function App() {
  
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
      <NavBar user={user} quantity={quantity} />
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
