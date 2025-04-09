import './Galeria.css';
import { motion } from 'framer-motion';

export default function Galeria() {
  const imagens = [
    'https://via.placeholder.com/300x200?text=Foto+1',
    'https://via.placeholder.com/300x200?text=Foto+2',
    'https://via.placeholder.com/300x200?text=Foto+3',
    'https://via.placeholder.com/300x200?text=Foto+4',
    'https://via.placeholder.com/300x200?text=Foto+5',
    'https://via.placeholder.com/300x200?text=Foto+6',
  ];

  return (
    <section className="galeria" id="galeria">
      <div className="container">
        <h2>Galeria de Trabalhos</h2>
        <div className="grid">
          {imagens.map((img, index) => (
            <motion.div 
              key={index} 
              className="img-wrapper"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={img} alt={`Trabalho ${index + 1}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
