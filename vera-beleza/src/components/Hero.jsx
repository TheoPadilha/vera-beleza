import "./hero.css";
import "./Navbar.css";
import manicureImg from "../assets/upscalemedia-transformed (2) (1).png";
import manicurepng from "../assets/manicure.png";
import pedicurepng from "../assets/pedicure.png";
import terapiapng from "../assets/lotus.png";
import depilacaopng from "../assets/legs.png";
import massagempng from "../assets/facial-treatment.png";
import muitomaispng from "../assets/love.png";
import { Blob, Blob2, Blob3 } from "./Blob.jsx";
import { BsInstagram } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";
import quadropng from "../assets/quadro.png";
import { LuCalendarHeart } from "react-icons/lu";
import bgFolha from "../assets/folhas/bg-folha (1).png";
import bgFolha2 from "../assets/folhas/bg-folha2.png";
import bgFolha3 from "../assets/folhas/bg-folha3.png";
import bgFolha4 from "../assets/folhas/bg-folha4.png";
import bgFolha5 from "../assets/folhas/bg-folha5.png";
import bgFolha6 from "../assets/folhas/bg-folha6.png";
import bgFolha7 from "../assets/folhas/bg-folha7.png";
import bgFolha8 from "../assets/folhas/bg-folha8.png";
import bgFolha9 from "../assets/folhas/bg-folha9.png";
import { useEffect, useState } from "react";

const Home = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const folhaStyle = {
    transform: `translate(${mousePos.x * 0.06}px, ${mousePos.y * 0.07}px)`,
    transition: "transform 0.1s ease-out",
  };
  
  return (
    <div className="hero-container">
      {/* NAVBAR */}
      <div className="nav_rei">
        <header className="navbar">
          <div className="bg-folha7">
            <img src={bgFolha7} alt="" style={folhaStyle} />
          </div>
          <div className="navbar-container">
            <div className="logo">Vera Alice</div>
            <div className="navLink_colorido">
              <ul className="nav-links">
                <li>
                  <a href="#">Início</a>
                </li>
                <li>
                  <a href="#servicos">Serviços</a>
                </li>
                <li>
                  <a href="#sobre">Sobre</a>
                </li>
                <li>
                  <a href="#contato">Contato</a>
                </li>
                <div className="blob-header">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#F4B395"
                      d="M45.8,-38.1C58.2,-33.4,66.2,-16.7,61.8,-4.4C57.5,8,40.7,16,28.3,27C16,38,8,52.1,-3.4,55.5C-14.8,58.9,-29.6,51.6,-42.7,40.6C-55.9,29.6,-67.4,14.8,-64.5,2.9C-61.6,-9,-44.3,-17.9,-31.1,-22.6C-17.9,-27.2,-9,-27.5,3.9,-31.4C16.7,-35.3,33.4,-42.7,45.8,-38.1Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </div>
              </ul>
            </div>
          </div>
        </header>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="hero-main">
        <Blob2 />
        <Blob />
        <Blob3 />
        <div>
          <ul className="icon-redes">
            <li>
              <a
                href="https://www.instagram.com/veraalicecristofoli"
                target="blank"
              >
                <BsInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5547984731947?text=Olá%2C%20gostaria%20de%20agendar%20um%20horário%20com%20a%20Vera%20Alice!"
                target="blank"
              >
                <SiWhatsapp />
              </a>
            </li>
          </ul>
        </div>

        <div className="img-mulheres">
          <img src={manicureImg} alt="" />
        </div>

        <div className="img-quadro">
          <img src={quadropng} alt="" />
        </div>

        <div className="bg-folha">
          <img src={bgFolha} alt="" style={folhaStyle} />
        </div>
        <div className="bg-folha2">
          <img src={bgFolha2} alt="" style={folhaStyle} />
        </div>
        <div className="bg-folha3">
          <img src={bgFolha3} alt="" style={folhaStyle}/>
        </div>
        <div className="bg-folha4">
          <img src={bgFolha4} alt="" style={folhaStyle}/>
        </div>
        <div className="bg-folha5">
          <img src={bgFolha5} alt="" style={folhaStyle}/>
        </div>
        <div className="bg-folha6">
          <img src={bgFolha6} alt="" style={folhaStyle}/>
        </div>

        {/* BG-FOLHA7 ESTA NO NAVBAR */}

        <div className="bg-folha8">
          <img src={bgFolha8} alt="" style={folhaStyle}/>
        </div>
        <div className="bg-folha9">
          <img src={bgFolha9} alt="" style={folhaStyle}/>
        </div>

        <div className="hero-text">
          <h1>
            Cuidando de você <br />
            por inteiro
          </h1>
          <h2>Beleza que começa no cuidado com você</h2>
          <div className="Hero-servicos">
            <ul className="linha1">
              <li>
                <img className="icon-trabalhos" src={manicurepng} alt="" />{" "}
                Manicure
              </li>

              <li>
                <img className="icon-trabalhos" src={pedicurepng} alt="" />{" "}
                Pedicure
              </li>
            </ul>
            <ul className="linha2">
              <li>
                <img className="icon-trabalhos" src={depilacaopng} alt="" />{" "}
                Depilação
              </li>

              <li>
                <img className="icon-trabalhos2" src={terapiapng} alt="" />{" "}
                Terapias
              </li>
            </ul>
            <ul className="linha3">
              <li>
                {" "}
                <img className="icon-trabalhos" src={massagempng} alt="" />
                Massagens
              </li>
              <li id="reiki">
                {" "}
                <img
                  className="icon-trabalhos"
                  src={muitomaispng}
                  alt=""
                />{" "}
                Reiki ,Reflexologia <br />e muito mais{" "}
              </li>
            </ul>
          </div>
          <div className="botaoAgendarHrr">
            <a
              className="agendehorario"
              href="https://wa.me/5547984731947?text=Olá%2C%20gostaria%20de%20agendar%20um%20horário%20com%20a%20Vera%20Alice!"
              target="blank"
            >
              <LuCalendarHeart />
              Agende um horário
            </a>
          </div>
        </div>

        <div className="hero-image">
          {/* <img src={manicureImg} alt="Mulher relaxando com atendimento" /> */}
        </div>
      </main>
    </div>
  );
};

export default Home;
