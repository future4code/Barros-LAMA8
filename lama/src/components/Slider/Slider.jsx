import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://www.caraguatatuba.sp.gov.br/pmc/wp-content/uploads/2019/04/pradr%C3%A3o-capa-montagem_Prancheta-1-1.png",
    "https://i1.wp.com/www.portalr3.com.br/wp-content/uploads/2015/12/20151208-banda-malta.jpg?fit=750%2C500&ssl=1",
    "https://th.bing.com/th/id/R.65cb1688bba28c0fe2c2eb36b604f87a?rik=RXkdhwIZMaKOdA&riu=http%3a%2f%2fwww.caraguatatuba.sp.gov.br%2fpmc%2fwp-content%2fuploads%2f2017%2f12%2fThaeme-e_Thiago_FernandoHiro-20140825212418.jpg&ehk=MJ5DV2igFpcWsjw5E%2bzcy6TEJLf%2fjelZdZFhqYB9ZiU%3d&risl=&pid=ImgRaw&r=0",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
