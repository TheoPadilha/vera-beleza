import React from "react";
import "./Depoimento.css"; // Importando o CSS separado

const Depoimento = () => {
  const clientes = [
    {
      nome: "Ana L.",
      idadeCidade: "26 anos – Balneário Camboriú",
      frase:
        "A Verinha sempre me proporciona uma experiência incrível com seus serviços de massagens relaxantes. Nunca me senti tão bem!",
    },
    {
      nome: "Marina F.",
      idadeCidade: "34 anos – Balneário Camboriú",
      frase:
        "Sou cliente fiel da Vera há anos. O ambiente é acolhedor e seus serviços de manicure e pedicure são impecáveis!",
    },
    {
      nome: "Marlene R.",
      idadeCidade: "75 anos – Balneário Camboriú",
      frase:
        "Sou cliente desta profissional a 26 anos. Tudo isso já diz o quanto estou satisfeita com sua atuação como manicure, depiladora e também como pessoa. A Verinha é dedicada, está sempre se atualizando e procura atender a todos com eficiência. Sua marca é a competência no ramo e gentileza no trato com a clientela. Quem experimenta não troca mais.",
    },
    {
      nome: "Rogério B.",
      idadeCidade: "54 anos – Balneário Camboriú",
      frase: "Ótima profissional, dedicada e muito atenciosa.",
    },
    {
      nome: "Milena M.",
      idadeCidade: "19 anos – Itapema",
      frase:
        "Profissional excelente, com muito a oferecer em serviços de qualidade! Super indico e recomendo se você busca bem estar",
    },
    {
      nome: "Theo H.",
      idadeCidade: "19 anos – Camboriú",
      frase:
        "Otimo trabalho e um amor de pessoa ,sempre me renova com suas terapias.",
    },
  ];

  return (
    <section className="depoimento" id="Depoimentos">
      <h2 className="depoimento__titulo">Transformamos autoestima em rotina</h2>
      <p className="depoimento__subtitulo">
        Veja o que nossos clientes dizem sobre Vera Alice:
      </p>

      <div className="depoimento__cards">
        {clientes.map((cliente, index) => (
          <div key={index} className="depoimento__card">
            <p className="depoimento__comentario">“{cliente.frase}”</p>
            <div className="depoimento__cliente">
              <div>
                <strong className="depoimento__nome">{cliente.nome}</strong>

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
