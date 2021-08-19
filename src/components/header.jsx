import React from "react";
import "../styles/header.css";

import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Person from "@material-ui/icons/Person";
import WheelChair from "@material-ui/icons/Accessible";
import Search from "@material-ui/icons/Search";
import { FaHeartbeat } from "react-icons/fa";
import { RiHandSanitizerLine } from "react-icons/ri";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="container-header">
          <img
            src="https://impormedical.com.co/images/assests/IM/Logo_Impormedical_Horizontal.png  "
            alt=""
          />
          <div className="container-header__input">
            <input
              type="text"
              name=""
              className="header-input"
              placeholder="Que estas buscando Escribelo qui"
            />
            <Search />
          </div>
          <ul className="header-list">
            <li className="header-list__item">
              <a href="" className="header-list__link">
                Mis pedidos
              </a>
            </li>
            <li className="header-list__item">
              <a href="" className="header-list__link">
                Hola alido
              </a>
            </li>
            <li className="header-list__item ">
              <a href="" className=" header-list__link ">
                <p>0</p>
                <ShoppingCart /> 
              </a>
            </li>
            <li className="header-list__item">
              <a href="" className="header-list__link">
                Carrito
              </a>
            </li>
          </ul>
        </div>

        <div className="container-header">
          <div className="header-icon">
            <a href="" className="header-list__link">
            <HiOutlineMenuAlt2 size={30}/>
            </a>
          </div>
          <div>
            <ul className="header-list">
              <li className="header-list__items">
                <a href="" className="header-list__link">
                  <WheelChair size={20} />
                  <p>MOVILIDAD</p>
                </a>
              </li>
              <li className="header-list__items">
                <a href="" className="header-list__link">
                  <FaHeartbeat size={20} />
                  <p>CUIDADO EN EL HOGAR</p>
                </a>
              </li>
              <li className="header-list__items">
                <a href="" className="header-list__link">
                  <Person size={20} />
                  <p> PROFESIONALES DE LA SALUD</p>
                </a>
              </li>
              <li className="header-list__items">
                <a href="" className="header-list__link">
                  <RiHandSanitizerLine size={20} />
                  <p>APABOCAS Y DESINFECCION</p>
                </a>
              </li>
               
            </ul>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
