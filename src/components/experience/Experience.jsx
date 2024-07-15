import React from 'react';
import "./experience.css";
import Data1 from './Data';
import Card from './Card';
export const Experience = () => {
  return (
    <section className="resume container section" id="experience">
      <h2 className="section__title">Experience</h2>
      <div className="resume__container grid">
        <div className="timeline grid">
          {Data1.map((val,id)=>{
            if (val.category === "education"){
              return (<Card key = {id} icon = {val.icon} title = {val.title} year = {val.year} desc = {val.desc} />)
            }
          })}
        </div>

        <div className="timeline grid">
          {Data1.map((val,index)=>{
            if (val.category === "experience"){
              return (<Card key = {index} icon = {val.icon} title = {val.title} year = {val.year} desc = {val.desc} />)
            }
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience;
