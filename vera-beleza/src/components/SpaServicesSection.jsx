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
        <p className="service-price"> Duração de {duration} minutos</p>
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
      title: "Cuidado com as Mãos",
      duration: "60",
      description:
        "Hidratação e renovação para suas mãos com técnicas suaves e produtos revitalizantes.",
    },
    {
      id: 2,
      image: "/image9.png",
      title: "Massagem Relaxante",
      duration: "75",
      description:
        "Desfrute de uma massagem calmante que alivia tensões e proporciona bem-estar completo.",
    },
    {
      id: 3,
      image: "/image8.png",
      title: "Depilação com Cera",
      duration: "60",
      description:
        "Remoção eficaz dos pelos com cera quente, garantindo suavidade e conforto para a pele.",
    },
    {
      id: 4,
      image: "/image11.png",
      title: "Reflexologia Manual e Podal",
      duration: "60",
      description:
        "Estimule pontos reflexos das mãos e pés para restaurar o equilíbrio do corpo e da mente.",
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
