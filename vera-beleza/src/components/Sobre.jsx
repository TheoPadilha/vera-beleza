import "./Sobre.css";
import veraAliceFoto from "/vera_img.jpg"; // Foto da Vera
import bgmancha from "../assets/sobre/bg-mancha-sobre.png"; // Fundo mancha
import bgmancha2 from "../assets/sobre/bg-mancha-sobre2.png"; // Fundo mancha
import bgalicate from "../assets/sobre/bg-sobre-alicate.png"; // Fundo mancha
import bgalicate2 from "../assets/sobre/bg-sobre-alicate2.png"; // Fundo mancha
import bgmeditando from "../assets/sobre/bg-sobre-meditando.png"; // Fundo mancha
import bglotus from "../assets/sobre/bg-lotus-sobre.png"; // Fundo mancha
import bgesmalte from "../assets/sobre/bg-sobre-esmalte.png"; // Fundo mancha
import { motion } from "framer-motion";

export default function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <div className="container-sobre">
        <img src={bgmancha} className="bgmancha" alt="Fundo decorativo" />
        <img src={bgmancha2} className="bgmancha2" alt="Fundo decorativo" />
        {/* <img src={bgalicate} className="alicate" alt="Fundo decorativo" /> */}
        {/* <img src={bgalicate2} className="alicate2" alt="Fundo decorativo" /> */}
        {/* <img src={bgmeditando} className="meditando" alt="Fundo decorativo" /> */}
        {/* <img src={bglotus} className="lotus" alt="Fundo decorativo" /> */}
        {/* <img src={bgesmalte} className="esmalte" alt="Fundo decorativo" /> */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="texto-img">
            <div className="texto-sobre">
              <h2>Sobre Vera Alice</h2>
              <p>
                Com mais de 20 anos de experiência no ramo da estética e
                bem-estar, Vera Alice Cristofoli é uma profissional altamente
                qualificada e reconhecida por seu cuidado, dedicação e atenção
                aos detalhes. Especialista em cuidados com as mãos, oferece
                serviços de manicure, pedicure, depilação, reflexologia,
                massagens relaxantes e terapias voltadas ao equilíbrio físico e
                energético. Certificada em Reiki e outras práticas integrativas,
                Vera une técnica, sensibilidade e um toque especial de carinho
                em cada atendimento, proporcionando uma experiência única e
                profundamente acolhedora. Seu compromisso vai além da estética:
                ela cuida da autoestima e do bem-estar de cada cliente como se
                fosse única. Ao longo dos anos, construiu uma clientela fiel,
                com mais de 50 clientes fixas que a acompanham há muito tempo,
                reconhecendo nela não só uma excelente profissional, mas também
                uma referência de confiança, empatia e dedicação. Cada sessão
                com a Vera é mais do que um serviço — é um momento de cuidado,
                acolhimento e transformação.
              </p>
            </div>
            <div className="foto-vera">
              <img src={veraAliceFoto} alt="Vera Alice Cristofoli" />
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
}
