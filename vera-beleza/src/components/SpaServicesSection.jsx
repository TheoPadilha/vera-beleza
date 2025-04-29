import React, { useEffect, useRef } from "react";
import "./SpaServicesSection.css"; // Importando o arquivo de estilos original

const ServiceCard = ({ image, title, price, duration, description }) => {
  const cardRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardRef.current.classList.add("visible");
          cardRef.current.classList.remove("exiting");
        } else {
          cardRef.current.classList.remove("visible");
          cardRef.current.classList.add("exiting");

          // Esperar a transição acabar antes de remover a classe "exiting"
          setTimeout(() => {
            if (cardRef.current) {
              cardRef.current.classList.remove("exiting");
            }
          }, 600); // mesmo tempo do transition no CSS (0.6s = 600ms)
        }
      },
      { threshold: [0, 0.02, 0.1, 0.5, 0.95, 0.98, 1] }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div className="service-card" ref={cardRef}>
      <div className="service-image-container image-animate">
        <img src={image} alt={title} className="service-image" />
      </div>
      <div className="service-content text-animate">
        <h3 className="service-title">{title}</h3>
        <p className="service-price">
          ${price} - Voucher de {duration} minutos
        </p>
        <p className="service-description">{description}</p>
      </div>
    </div>
  );
};

export default function SpaServicesSection() {
  const services = [
    {
      id: 1,
      image: "/image10.png",
      title: "Tratamento de Spa Facial",
      price: "65.00",
      duration: "60",
      description:
        "Irradie confiança com este tratamento facial profundamente benéfico massagem.",
    },
    {
      id: 2,
      image: "/image9.png",
      title: "Massagem nas Costas",
      price: "125.00",
      duration: "60",
      description:
        "Esta massagem calmante é uma mistura de golpes, alongamento movimentos e acupressão.",
    },
    {
      id: 3,
      image: "/image8.png",
      title: "Massagem com Pedras Quentes",
      price: "150.00",
      duration: "90",
      description:
        "Relaxe profundamente com o calor terapêutico das pedras vulcânicas sobre os músculos tensos.",
    },
    {
      id: 4,
      image: "/image11.png",
      title: "Reflexologia Manual e Podal",
      price: "85.00",
      duration: "45",
      description:
        "Terapia de pressão específica nos pontos reflexos das mãos e pés para equilibrar o corpo.",
    },
  ];

  return (
    <section className="spa-services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">TRATAMENTOS</h2>
          <p className="section-subtitle">Relaxe e Renove</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              image={service.image}
              title={service.title}
              price={service.price}
              duration={service.duration}
              description={service.description}
            />
          ))}
        </div>
      </div>
      <div className="espacof"></div>
    </section>
  );
}
