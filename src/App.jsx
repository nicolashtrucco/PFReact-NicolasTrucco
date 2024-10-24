/** @format */

import "./App.scss";
import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/itemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvide } from "./context/CartContext";
import Cart from "./components/Cart/Cart";

function App() {
   return (
      <>
         <BrowserRouter>
            <CartProvide>
               <NavBar />

               <div className="appContainer">
                  <Routes>
                     <Route path="/" element={<ItemListContainer />} />

                     <Route
                        path="/category/:categoryId"
                        element={<ItemListContainer />}
                     />
                     <Route
                        path="movie/:productId"
                        element={<ItemDetailContainer />}
                     />

                     <Route path="/cart" element={<Cart/>}/>
                  </Routes>
               </div>
            </CartProvide>
         </BrowserRouter>
      </>
   );
}

export default App;
