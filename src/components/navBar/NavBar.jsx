/** @format */

import CartWidget from "./CartWidget";
import blockBusterLogo from "../../assets/blockBusterLogo.png";
import "../navBar/navbar.scss";
import { Link } from "react-router-dom";

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
            <Link to="/">
               <img src={blockBusterLogo} alt="LogoPrincipal" />
            </Link>
         </div>

         <nav>
            <ul className="navBarLinks">
               <li>
                  <Link to="/category/nosotros">Nosotros</Link>
               </li>
               <li>
                  <Link to="/category/alquilar">Alquilar</Link>
               </li>
               <li>
                  <Link to="/category/comprar">comprar</Link>
               </li>
               <li>
                  <Link to="/">Novedades</Link>
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
