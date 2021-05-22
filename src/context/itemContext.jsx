import { createContext, useEffect, useState } from "react";
import { getFirestore } from '../firebase/index';

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [itemsFirebase, setItemsFirebase] = useState([]);
  const [isEmptyCategory, setIsEmptyCategory] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    itemCollection
      .get()
      .then((querySnapshot) => {
          console.log(querySnapshot.size);
        if (querySnapshot.size === 0) {
          setIsEmptyCategory(true);
        }
        setItemsFirebase(querySnapshot.docs.map((doc) => doc.data()));
      })
      .catch((error) => console.error("Firestore error: ", error));
  }, []);

  return (
    <ItemContext.Provider value={{ itemsFirebase, isEmptyCategory }}>
      {children}
    </ItemContext.Provider>
  );
};
