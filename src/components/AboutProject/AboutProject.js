import './AboutProject.css'
import React from 'react';

function AboutProject() {

    return (
       <section className='about-project'>
           <h2 className='about-project__main-title'>
               О проекте
           </h2>
           <div className='about-project__description'>
               <div className='about-project__section-one'>
                    <h3 className='about-project__section-title'>
                        Дипломный проект включал 5 этапов
                    </h3>
                    <p className='about-project__section-text'>
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                    </p>
               </div>
               <div className='about-project__section-one'>
                    <h3 className='about-project__section-title'>
                        На выполнение диплома ушло 5 недель
                    </h3>
                    <p className='about-project__section-text'>
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
               </div>
           </div>
           <div className='about-project__timeline'>
               <div className='about-project__timeline-wrap'>
                    <div className='about-project__timeline-one'>
                            1 неделя
                    </div>
                    <p className='about-project__timeline-description'>
                        Back-end
                    </p>
               </div>
               <div className='about-project__timeline-wrap'>
                    <div className='about-project__timeline-two'>
                            4 недели
                    </div>
                    <p className='about-project__timeline-description'>
                            Front-end
                    </p>
               </div>
           </div>
       </section> 
    )
}

export default AboutProject