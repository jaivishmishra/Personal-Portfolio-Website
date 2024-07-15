import React from 'react';
import "./blog.css";
import Image1 from "../../assets/blog-1.svg";
import Image2 from "../../assets/work-2.svg";
import Image3 from "../../assets/blog-3.svg";

export const Blog = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Latest Posts</h2>

      <div className="blog__container grid">
        <div className="blog__card">
          <div className="blog__thumb">
            <a href="https://jaivishmishra.blogspot.com/"><span className="blog__category">Science & Technology</span></a>
            <a href="https://jaivishmishra.blogspot.com/2024/07/did-you-know-that-scientists-are-now.html"><img src={Image1} alt="" className="blog__img" /></a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Integration of Computer Science in Systemic Biotechnology: Pioneering the Future of Science</h3>
            <div className="blog__meta">
              <span>02 July, 2024</span>
              <span className="blog__dot">.</span>
              <span>Jaivish</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href="https://jaivishmishra.blogspot.com/"><span className="blog__category">Biotechnology</span></a>
            <a href="https://jaivishmishra.blogspot.com/2024/07/bee-venom-buzzing-new-weapon-in-fight_2.html"><img src={Image2} alt="" className="blog__img" /></a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Bee Venom: A Buzzing New Weapon in the Fight Against Breast Cancer</h3>
            <div className="blog__meta">
              <span>02 July, 2024</span>
              <span className="blog__dot">.</span>
              <span>Jaivish</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href="https://jaivishmishra.blogspot.com/"><span className="blog__category">Technology</span></a>
            <a href="https://jaivishmishra.blogspot.com/2024/07/balancing-empathy-and-ethics-pros-and.html"><img src={Image3} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Balancing Empathy and Ethics: The Pros and Cons of Emotional Intelligence in Machines</h3>
            <div className="blog__meta">
              <span>02 July, 2024</span>
              <span className="blog__dot">.</span>
              <span>Jaivish</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
