import './Servicos.css';
import { motion } from 'framer-motion';

export default function Servicos() {
  const servicos = [
    {
      titulo: "Manicure e Pedicure",
      descricao: "Cuidado completo com unhas, hidratação e esmaltação impecável.",
    },
    {
      titulo: "Reflexologia",
      descricao: "Técnica terapêutica que alivia tensões e promove equilíbrio.",
    },
    {
      titulo: "Massagem Relaxante",
      descricao: "Momentos de relaxamento com técnicas suaves e revigorantes.",
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
    </section>
  );
}
