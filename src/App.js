import { ItemDetailContainer } from "./pages/itemDetailContainer";
import CategoryContainer from "./pages/CategoryContainer";
import { ContainerGreeting } from "./components/containerGreeting/containerGreeting";
import { ItemList } from "./components/itemList/itemList";
import { NavBar } from "./components/navBar/NavBar.jsx";
import { CartContext } from "./context/cartContext";
import Footer from "./components/Footer/Footer";
import "./app.scss";
import Cart from "./pages/cart/Cart.jsx";
import { PagesUndefined } from "./components/pagesUndefined/PagesUndefined";
import { getFirestore } from "./firebase/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

function App() {
  const [itemsFirebase, setItemsFirebase] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const db = getFirestore();
        const itemCollection = db.collection("items");
        const querySnapshot = await itemCollection.get();
        if (querySnapshot.size === 0) {
          console.log("probando si pasa x aca");
        } else {
          let data = [];
          querySnapshot.docs.forEach((doc) =>
            data.push({
              id: doc.id,
              ...doc.data(),
            })
          );
          setItemsFirebase(data);
        }
      } catch (error) {
        console.error("Firestore error: ", error);
      }
    };
    getData();
  }, []);

  const { quantity } = useContext(CartContext);

  return (
    <BrowserRouter>
      <NavBar quantity={quantity} />
      <Switch>
        <Route path="/itemDetailContainer/:catName/:id">
          <CategoryContainer itemsFirebase={itemsFirebase} />
          <ItemDetailContainer itemsFirebase={itemsFirebase} />
          <Route component={Footer} />
        </Route>

        <Route path="/category/:catName">
          <CategoryContainer itemsFirebase={itemsFirebase} />
          <ItemList itemsFirebase={itemsFirebase} />
          <Route component={Footer} />
        </Route>

        <Route path="/cart" component={Cart} />

        <Route path="/category">
          <CategoryContainer itemsFirebase={itemsFirebase} />
          <h3>Elegí una categoria!🔍</h3>
          <Route component={Footer} />
        </Route>

        <Route exact path="/insumosmedicos-de-marco">
          <ContainerGreeting />
          <CategoryContainer itemsFirebase={itemsFirebase} />
        </Route>
        <Route component={PagesUndefined} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
