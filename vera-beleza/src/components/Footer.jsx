// Footer.jsx
import React from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>Vera Alice <br /> Mãos & Terapias </h3>
          <p>Cuidando da sua beleza com carinho e dedicação</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Menu</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
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
                <a href="#local">Localização</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contato</h4>
            <ul className="contato-info">
              <li>
                <FaWhatsapp /> (47) 9 8473-1947
              </li>
              <li>
                <FaMapMarkerAlt /> Rua 300, 160 - sala 04
              </li>
              <li>Centro, Balneário Camboriú - SC</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Horário de Atendimento</h4>
            <ul className="horarios">
              <li>Segunda a Sexta: 9h às 21h</li>
              <li>Sábado: 9h às 14h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-social">
        <a
          href="https://www.instagram.com/veraalicecristofoli"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/5547984731947?text=Olá%2C%20gostaria%20de%20agendar%20um%20horário%20com%20a%20Vera%20Alice!"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaWhatsapp />
        </a>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; 2025 Vera Alice Mãos & Terapias . Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
