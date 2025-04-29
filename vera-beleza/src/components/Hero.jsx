import "./hero.css";
import "./Navbar.css";
import manicureImg from "../assets/home/upscalemedia-transformed (2) (1).png";
import manicurepng from "../assets/home/manicure.png";
import pedicurepng from "../assets/home/pedicure.png";
import terapiapng from "../assets/home/lotus.png";
import depilacaopng from "../assets/home/legs.png";
import massagempng from "../assets/home/facial-treatment.png";
import muitomaispng from "../assets/home/love.png";
import { Blob, Blob2, Blob3 } from "./Blob.jsx";
import { BsInstagram } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";
import quadropng from "../assets/home/quadro.png";
import { LuCalendarHeart } from "react-icons/lu";

import { useEffect, useState } from "react";
import PhysicsCanvas from "./PhysicsCanvas"; // Importa o componente que criamos
import MenuNav from "./Menu-nav.jsx";
import { IoReorderThree } from "react-icons/io5";
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

  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <div className="hero-container" style={{ position: "relative" }}>
      {/* Renderiza o canvas de animação com p5.js */}
      <PhysicsCanvas />
      {/* NAVBAR */}
      <header>
        <div className="nav_rei">
          <header className="navbar">
            <div className="navbar-container">
              <div className="logo">Vera Alice</div>
              <div className="navLink_colorido">
                <ul className="nav-links">
                  <li>
                    <a href="#sobre">Sobre</a>
                  </li>
                  <li>
                    <a href="#servicos">Serviços</a>
                  </li>
                  <li>
                    <a href="#Depoimentos">Depoimentos</a>
                  </li>
                  <li>
                    <a href="#local">Local</a>
                  </li>
                  <div className="blob-header">
                    <svg
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#F4B395"
                        d="M45.8,-38.1C58.2,-33.4,66.2,-16.7,61.8,-4.4C57.5,8,40.7,16,28.3,27C16,38,8,52.1,-3.4,55.5C-14.8,58.9,-29.6,51.6,-42.7,40.6C-55.9,29.6,-67.4,14.8,-64.5,2.9C-61.6,-9,-44.3,-17.9,-31.1,-22.6C-17.9,-27.2,-9,-27.5,3.9,-31.4C16.7,-35.3,33.4,-42.7,45.8,-38.1Z"
                        transform="translate(100 100)"
                      />
                    </svg>
                  </div>
                </ul>
              </div>
              <div>
                <div
                  className="btn-abrir-menu"
                  onClick={() => setMenuAberto(true)}
                >
                  <IoReorderThree />
                </div>
                <MenuNav
                  aberto={menuAberto}
                  fecharMenu={() => setMenuAberto(false)}
                />
              </div>
            </div>
          </header>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="hero-main">
        <Blob2 />
        <Blob />
        <Blob3 />

        <div className="img-mulheres">
          <img src={manicureImg} alt="" />
        </div>

        <div className="img-quadro">
          <img src={quadropng} alt="" />
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
