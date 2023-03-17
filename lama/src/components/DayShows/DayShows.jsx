import React from "react";
import "./DayShows.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="diasShows">
      <div className="col">
        <div className="row">
          <img
            src="https://v5j9q4b5.rocketcdn.me/wp-content/uploads/2018/02/capa-7-1024x570.jpg.webp"
            alt=""
          />
          <button>
            <Link to="/shows/1" className="link">
              Sexta
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://s2.glbimg.com/HFJAPxpNj-fwiZ7RpSgrJ0M4dfw=/0x0:1920x1080/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/O/P/u92dB5QBKFSZirp8LKyA/justinbieber-coldplay-guns.jpg"
            alt=""
          />
          <button>
            <Link to="/shows/2" className="link">
              Sábado
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://www.guiagaysaopaulo.com.br/public/uploads/imagens/originais/30_djs_mais_famosos_sucesso_2019_top_gay_brasil.jpg"
            alt=""
          />
          <button>
            <Link to="/shows/3" className="link">
              Domingo
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;