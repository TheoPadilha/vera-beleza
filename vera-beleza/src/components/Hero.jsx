import "./hero.css";
import manicureImg from "../assets/imagem_manicure2.png";
const Home = () => {
  return (
    <div className="hero-container">
      <header className="hero-header">
        <nav className="hero-nav">
          <a href="#">Início</a>
          <a href="#">Serviços</a>
          <a href="#">Sobre</a>
          <a href="#">Contato</a>
        </nav>
      </header>

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
          <button>
            <a href="https://wa.me/5547984731947?text=Olá%2C%20gostaria%20de%20agendar%20um%20horário%20com%20a%20Vera%20Alice!">
              Agende um horário
            </a>
          </button>
        </div>
        <div className="hero-image">
          <img src={manicureImg} alt="Mulher com as mãos cuidadas" />
        </div>
      </main>
    </div>
  );
};

export default Home;
