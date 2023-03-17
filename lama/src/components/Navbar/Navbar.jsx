
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import {Link} from "react-router-dom"
import "./Navbar.scss"


function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="img/br.png" alt="" />
            <KeyboardArrowDownIcon/>
          </div>
          <div className="item">
            <span>R$</span>
            <KeyboardArrowDownIcon/>
          </div>
          <div className="item">
            <Link className="link" to="/shows/1">Sexta</Link>
          </div>
          <div className="item">
            <Link className="link" to="/shows/2">Sábado</Link>
          </div>
          <div className="item">
            <Link className="link" to="/shows/3">Domingo</Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">LaMa Shows</Link>
        </div>
        <div className="right">
        <div className="item">
          <Link className="link" to="/">Início</Link>
        </div>
        <div className="item">
          <Link className="link" to="/">Sobre-nós</Link>
        </div>
        <div className="item">
          <Link className="link" to="/">Contatos</Link>
        </div>
        <div className="item">
          <Link className="link" to="/">Ingressos</Link>
        </div>
        <div className="icons">
          <SearchIcon/>
          <PersonIcon/>
          <FavoriteIcon/>
          <div className="cartIcon">
            <LocalActivityIcon/>
            <span>0</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;


