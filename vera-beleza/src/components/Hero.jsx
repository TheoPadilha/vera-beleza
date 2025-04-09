import "./hero.css";
import "./Navbar.css";
// import manicureImg from "";

const Home = () => {
  return (
    <div className="hero-container">
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="blob1"
      >
        <path
          fill="#C69C6C"
          d="M55.2,-54.7C66.7,-43.8,67.8,-21.9,64.7,-3.1C61.6,15.7,54.4,31.4,42.9,46.6C31.4,61.8,15.7,76.4,-0.5,77C-16.8,77.5,-33.6,64,-48.1,48.8C-62.7,33.6,-74.9,16.8,-74.3,0.6C-73.7,-15.6,-60.2,-31.2,-45.7,-42.1C-31.2,-53.1,-15.6,-59.4,3.2,-62.5C21.9,-65.7,43.8,-65.7,55.2,-54.7Z"
          transform="translate(100 100)"
        />
      </svg>
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
          </ul>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}

      <main className="hero-main">
        <div className="hero-text">
          <h1>
            Beleza para <br />
            suas mãos
          </h1>
          <p>
            Realce sua elegância com cuidados <br />
            especializados e esmaltes de qualidade.
          </p>
          <div className="botaoAgendarHrr">
            <button>
              <a
                className="agendehorario"
                href="https://wa.me/5547984731947?text=Olá%2C%20gostaria%20de%20agendar%20um%20horário%20com%20a%20Vera%20Alice!"
              >
                Agende um horário
              </a>
            </button>
          </div>
        </div>
        <div className="hero-image">
          {/* <img src={manicureImg} alt="Mulher com as mãos cuidadas" /> */}
        </div>
      </main>
    </div>
  );
};

export default Home;
