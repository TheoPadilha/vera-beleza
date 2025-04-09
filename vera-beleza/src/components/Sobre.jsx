import './Sobre.css';
import { motion } from 'framer-motion';

export default function Sobre() {
  return (
    <motion.section 
      className="sobre" 
      id="sobre"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <h2>Sobre Vera Alice</h2>
        <p>
          Com mais de 10 anos de experiência, Vera Alice Cristofoli é especialista em cuidados com as mãos e bem-estar.
          Oferece serviços de manicure, reflexologia, massagens relaxantes e muito mais, sempre com um toque especial de carinho, atenção e profissionalismo.
        </p>
      </div>
    </motion.section>
  );
}
