import "./hero.css";
import "./Navbar.css";
// import manicureImg from "";

const Home = () => {
  return (
    <div className="hero-container">
      <div className="blob1">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#C69C6C"
            d="M55.2,-54.7C66.7,-43.8,67.8,-21.9,64.7,-3.1C61.6,15.7,54.4,31.4,42.9,46.6C31.4,61.8,15.7,76.4,-0.5,77C-16.8,77.5,-33.6,64,-48.1,48.8C-62.7,33.6,-74.9,16.8,-74.3,0.6C-73.7,-15.6,-60.2,-31.2,-45.7,-42.1C-31.2,-53.1,-15.6,-59.4,3.2,-62.5C21.9,-65.7,43.8,-65.7,55.2,-54.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* NAVBAR */}
      <header className="navbar">
        <div className="navbar-container">
          <div className="logo">Vera Alice</div>
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
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="hero-main">
        <div className="hero-text">
          <h1>
            Cuidando de você <br />
            por inteiro
          </h1>
          <p>
            Manicure, Pedicure, Depilação, Terapias, <br />
            Massagens, Reiki, Reflexologia e muito mais.
          </p>
          <div className="botaoAgendarHrr">
            <button>
              <a
                className="agendehorario"
                href="https://wa.me/5547984731947?text=Olá%2C%20gostaria%20de%20agendar%20um%20horário%20com%20a%20Vera%20Alice!"
                target="blank"
              >
                Agende um horário
              </a>
            </button>
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
