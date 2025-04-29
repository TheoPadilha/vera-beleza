import React from "react";
import { IoClose } from "react-icons/io5";
import "./Navbar.css"; // Mantém a importação do seu arquivo CSS existente

const MenuNav = ({ aberto, fecharMenu }) => {
  return (
    <>
      {/* Overlay que aparece por trás do menu quando aberto */}
      <div
        className={`overlay-menu ${aberto ? "ativo" : ""}`}
        style={{ display: aberto ? "block" : "none" }}
        onClick={fecharMenu}
      ></div>

      {/* Menu Mobile */}
      <div className={`Menu-mob ${aberto ? "ativo" : ""}`}>
        <div className="btn-fechar" onClick={fecharMenu}>
          <IoClose />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#sobre" onClick={fecharMenu}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#servicos" onClick={fecharMenu}>
                Serviços
              </a>
            </li>
            <li>
              <a href="#Depoimentos" onClick={fecharMenu}>
                Depoimentos
              </a>
            </li>
            <li>
              <a href="#local" onClick={fecharMenu}>
                Local
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MenuNav;
