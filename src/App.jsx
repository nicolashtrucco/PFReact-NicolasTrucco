/** @format */

import "./App.scss";
import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";

function App() {
   return (
      <body>
         <NavBar />
         <div className="general">
         <ItemListContainer greeting={'BlockBuster vuelve por venganza...'}/>

         </div>
      </body>
   );
}

export default App;
