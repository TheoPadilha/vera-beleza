import React from "react";
import "./Localizacao.css";

const Localizacao = () => {
  return (
    <section className="localizacao" id="local">
      <h2>Onde estamos</h2>
      <p>
        Atendemos em Balneário Camboriú, com horário marcado. Veja o local no
        mapa:
      </p>

      <div className="conteudo-local">
        <div className="mapa-container">
          <iframe
            title="Mapa localização"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d444.41364233996336!2d-48.63862255724864!3d-26.988769056085182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b600af39c4a3%3A0x3e80e46dabdecb4a!2sNil%20Cabeleireiro!5e0!3m2!1spt-BR!2sbr!4v1745453199712!5m2!1spt-BR!2sbr"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="imagem-local">
          <img
            src="/img-salao.jpg" // Substitua pelo caminho correto da sua imagem
            alt="Foto do local de atendimento"
          />
          <img
            src="/img-sala.jpg" // Substitua pelo caminho correto da sua imagem
            alt="Foto do local de atendimento"
          />
        </div>
      </div>

      <div className="endereco">
        <h3>Endereço:</h3>
        <p>Rua 300, 160 - sala 04 - Centro, Balneário Camboriú - SC</p>
        <p>WhatsApp para agendamento: (47) 9 8473-1947</p>
      </div>
    </section>
  );
};

export default Localizacao;
