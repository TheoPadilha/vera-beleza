import './Footer.css';


export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h3>Vera Alice Cristofoli</h3>
        <p>Beleza, bem-estar e cuidado em cada detalhe.</p>
        
        <div className="social">
          <a 
            href="https://instagram.com/veraalicecristofoli" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            
          </a>
        </div>

        <small>© {new Date().getFullYear()} Desenvolvido com carinho por Theo Padilha 💻💅</small>
      </div>
    </footer>
  );
}
