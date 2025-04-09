import './Contato.css';
import { motion } from 'framer-motion';

export default function Contato() {
  const whatsappLink = `https://wa.me/5547984731947?text=Olá%2C%20gostaria%20de%20agendar%20um%20horário%20com%20a%20Vera%20Alice!`;

  return (
    <motion.section 
      className="contato" 
      id="contato"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <h2>Entre em Contato</h2>
        <p>Agende seu horário com um atendimento especial e personalizado.</p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="botao-contato">
          Falar no WhatsApp
        </a>
      </div>
    </motion.section>
  );
}
