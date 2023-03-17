import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Dias de Shows</h1>
          <span>Sexta</span>
          <span>Sábado</span>
          <span>Domingo</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>Sobre-nós</h1>
          <span>
          Somos uma equipe apaixonada por música, 
          comprometida em oferecer experiências inesquecíveis em shows e eventos,
          sempre buscando o melhor para o público e artistas.
          </span>
        </div>
        <div className="item">
          <h1>Fale Conosco</h1>
          <span>
          Endereço: Rua XXXX, nº XX 
           Cidade: Cuiabá - Estado: MT 
           Telefone: (95) 99955-2510 
           Email: lamashow@gmail.com
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">LamaShow</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/pagamentos.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;