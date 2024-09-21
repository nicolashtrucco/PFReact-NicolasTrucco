/** @format */

import CartWidget from "./CartWidget";
import blockBusterLogo from "../../assets/blockBusterLogo.png";
import "../navBar/navbar.scss";

const NavBar = () => {
   const openNav = () => {
      document.querySelector("#mobileNav").style.width = "100%";
   };

   const closeNav = () => {
      document.querySelector("#mobileNav").style.width = "0%";
   };

   return (
      <header>
         <div className="navBarLogo">
            <img src={blockBusterLogo} alt="LogoPrincipal" />
         </div>

         <nav>
            <ul className="navBarLinks">
               <li>
                  <a href="#">Nosotros</a>
               </li>
               <li>
                  <a href="#">Alquilar</a>
               </li>
               <li>
                  <a href="#">Comprar</a>
               </li>
               <li>
                  <a href="#">Novedades</a>
               </li>
            </ul>
         </nav>

         <CartWidget />

         <a href="#" onClick={openNav} className="openNav">
            <i className="menu bi bi-list"></i>
         </a>

         <div className="overlay" id="mobileNav">
            <a href="#" onClick={closeNav} className="closeNav">
               <i className="closeNav bi bi-x"></i>
            </a>

            <div className="overlayContent">
               <a href="#">Nosotros</a>
               <a href="#">Alquilar</a>
               <a href="#">Comprar</a>
               <a href="#">Novedades</a>
            </div>
         </div>
      </header>
   );
};

export default NavBar;
