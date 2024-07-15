import React from 'react'

export const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
           <i className="about__icon icon-trophy "></i>
            <div>
                <h3 className="about__title">Winner</h3>
                <span className="about__subtitle">National Science Day Idea Presentation, Organized by Department of Biotechnology , NIET</span>
            </div>
        </div>
        <div className="about__box">
           <i className="about__icon icon-trophy"></i>
            <div>
                <h3 className="about__title">2nd Position</h3>
                <span className="about__subtitle">Biotrendz International Conference Oral Project Presentation, Organized by Department of Biotechnology , NIET </span>
            </div>
        </div>
        <div className="about__box">
           <i className="about__icon icon-trophy"></i>
            <div>
                <h3 className="about__title">3rd Position</h3>
                <span className="about__subtitle">Project Exhibition, Organized by Department of Electronics and Comunications Engineering , NIET </span>
            </div>
        </div>
    </div>
  )
}
