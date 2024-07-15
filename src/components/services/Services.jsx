import React from 'react';
import "./services.css";
import Image1 from "../../assets/service-1.png";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Computational Biotechnology",
    description:
      "Eager fresher in biotechnology, enthusiastic about tackling diverse projects to develop skills in computational biology and make impactful contributions.",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "Aspiring web developer with a keen interest in building and designing websites. Excited to learn and grow through hands-on projects and real-world experience.",
  },
  {
    id: 3,
    image: Image3,
    title: "Photography",
    description:
      "Enthusiastic mobile photographer with a passion for capturing stunning moments. Eager to enhance skills through creative projects and explore the art of photography.",
  },
];


export const Services = () => {
  return <section className="services container section" id='services'>
    <h2 className="section__title">Services</h2>
    <div className="services__container grid">
      {data.map(({id, image, title, description})=>{
        return(
          <div className="services__card" key={id}>
            <img src={image} alt="" className="services__img" />
            <h3 className="services__title">
              {title}
            </h3>
            <p className="services__description">{description}</p>
          </div>
        );
      })}
    </div>
  </section>
}

export default Services;