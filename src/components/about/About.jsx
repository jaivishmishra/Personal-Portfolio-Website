import React from 'react';
import "./about.css";
import Image from "../../assets/avatar-2.svg";
import { AboutBox } from './AboutBox';

export const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={Image} alt="" className='about__img'/>
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">I am Jaivish Mishra, Web Developer from India. I am doing my Bachelors of Technology in Biotechnology. I am good at Designing and Building Websites and Familiar with Wix Studios and Figma. In Biotechnology, I am experienced in Nanobiotechnology, Microbiology, Plant biotechnolgy, MATLAB and Computational Biotechnolgy which include Molecular docking which includes both Protein-Ligand and Protein-Protein docking, ADMET, etc. </p>
            <a href="https://drive.google.com/file/d/11bIsCSVfrdYAjT5etGsK5NYLXLsvGmsg/view?usp=sharing" className="btn" download>Download CV</a>
          </div>
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Front-End Development</h3>
                <span className="skills__number">70%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Photography</h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage photography"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Computational Biotechnology</h3>
                <span className="skills__number">70%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage comp__Biotech"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox/>
    </section>
  )
}
