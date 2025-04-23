import React from "react";
import "./Depoimento.css"; // Importando o CSS separado

const Depoimento = () => {
  const clientes = [
    {
      nome: "Ana L.",
      idadeCidade: "32 anos – Balneário Camboriú",
      frase:
        "A Verinha sempre me proporciona uma experiência incrível com seus serviços de depilação e massagens relaxantes. Nunca me senti tão bem!",
    },
    {
      nome: "Marina F.",
      idadeCidade: "28 anos – Balneário Camboriú",
      frase:
        "Sou cliente fiel da Vera Alice há anos. O ambiente é sempre acolhedor e seus serviços de manicure e pedicure são impecáveis!",
    },
    {
      nome: "Juliana S.",
      idadeCidade: "35 anos – Balneário Camboriú",
      frase:
        "Há muito tempo confio na Vera para todas as minhas terapias. Ela é uma profissional incrível e sempre me deixa renovada!",
    },
    {
      nome: "Sofia T.",
      idadeCidade: "40 anos – Balneário Camboriú",
      frase:
        "Eu não confio em mais ninguém para depilação, Reiki e terapias. A Vera Alice sempre sabe o que eu preciso!",
    },
    {
      nome: "Beatriz M.",
      idadeCidade: "27 anos – Balneário Camboriú",
      frase:
        "As massagens relaxantes da Vera são um verdadeiro cuidado com o corpo e a mente. Só tenho a agradecer pelo trabalho dela!",
    },
  ];

  return (
    <section className="depoimento">
      <h2 className="depoimento__titulo">Transformamos autoestima em rotina</h2>
      <p className="depoimento__subtitulo">
        Veja o que nossas clientes dizem sobre os serviços da Vera Alice:
      </p>

      <div className="depoimento__cards">
        {clientes.map((cliente, index) => (
          <div key={index} className="depoimento__card">
            <p className="depoimento__comentario">“{cliente.frase}”</p>
            <div className="depoimento__cliente">
              <div>
                <strong className="depoimento__nome">{cliente.nome}</strong>
                <br />
                <small className="depoimento__info">
                  {cliente.idadeCidade}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Depoimento;
