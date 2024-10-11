/** @format */

import "./App.scss";
import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount";
import { ItemDetailContainer } from "./components/itemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <div className="appContainer">
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={ <ItemListContainer />}/>
            <Route path='movie/:productId' element={<ItemDetailContainer />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

