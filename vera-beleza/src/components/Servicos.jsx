import "./Servicos.css";
import { motion } from "framer-motion";
import { Blob4, Blob5 } from "./Blob.jsx";

export default function Servicos() {
  const servicos = [
    {
      titulo: "Manicure e Pedicure",
      descricao:
        "Cuidado completo com unhas, hidratação e esmaltação impecável.",
    },
    {
      titulo: "Reflexologia",
      descricao: "Técnica terapêutica que alivia tensões e promove equilíbrio.",
    },
    {
      titulo: "Massagem Relaxante",
      descricao: "Momentos de relaxamento com técnicas suaves e revigorantes.",
    },
    {
      titulo: "Depilação",
      descricao:
        "Remoção de pelos com cera, garantindo resultado duradouro. Pele lisinha e bem cuidada.",
    },
    {
      titulo: "Reiki e Terapias",
      descricao:
        "Terapias que restauram sua energia e trazem leveza ao seu dia. Técnicas que promovem bem-estar profundo e harmonia interior.",
    },
  ];

  return (
    <section className="servicos" id="servicos">
      <div className="container">
        <h2>Nossos Serviços</h2>
        <div className="cards">
          {servicos.map((servico, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{servico.titulo}</h3>
              <p>{servico.descricao}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="img-servicos">
        <img src="/image3.png" alt="" />
        <div className="img">
          <div className="espaço"></div>
          <img src="/image5.png" alt="" />
        </div>
        <img src="/image4.png" alt="" />
        <div className="img">
          <div className="espaço"></div>
          <img src="/image6.png" alt="" />
        </div>
      </div>
    </section>
  );
}
