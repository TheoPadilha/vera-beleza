import "./hero.css";
import "./Navbar.css";
import manicureImg from "../assets/upscalemedia-transformed (2) (1).png";
import { Blob, Blob2 ,Blob3} from "./Blob.jsx";
const Home = () => {
  return (
    <div className="hero-container">
      {/* NAVBAR */}
      <div className="nav_rei">
        <header className="navbar">
          <div className="navbar-container">
            <div className="logo">Vera Alice</div>
            <div className="navLink_colorido">
              <ul className="nav-links">
                <li>
                  <a href="#">Início</a>
                </li>
                <li>
                  <a href="#">Serviços</a>
                </li>
                <li>
                  <a href="#">Sobre</a>
                </li>
                <li>
                  <a href="#">Contato</a>
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


        <div className="img-mulheres">
          <img src={manicureImg} alt="" />
        </div>
        <div className="hero-text">
          <h1>
            Cuidando de você <br />
            por inteiro
          </h1>
          <h2>Beleza que começa no cuidado com você</h2>
          <p>
            Manicure, Pedicure, Depilação, Terapias, <br />
            Massagens, Reiki, Reflexologia e muito mais.
          </p>
          <div className="botaoAgendarHrr">
            <a
              className="agendehorario"
              href="https://wa.me/5547984731947?text=Olá%2C%20gostaria%20de%20agendar%20um%20horário%20com%20a%20Vera%20Alice!"
              target="blank"
            >
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
