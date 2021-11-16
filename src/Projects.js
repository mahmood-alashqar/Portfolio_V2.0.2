import React , {useEffect } from 'react';

//aos library 
import AOS from "aos";
import "aos/dist/aos.css";
//css files
import './css/projects.css'

import projects from './projectsData';

import Project from './Project';

export default function Projects() {



  useEffect(() => {
    console.log('mounted');
    AOS.init({
      duration : 2000
    });
  })
    return (
      <>
      {projects.map((project , index) => {
        let colClassName = '' ;
        let fadeDirection = '' ;
        if(index%2 !== 0){
          colClassName="colProject rightCol" ;
           fadeDirection="fade-right";
        } else{
          colClassName="colProject leftCol" ;
           fadeDirection="fade-left" ;
        }

        return(
          <Project title={project.title} description={project.description} 
          badges={project.badges} 
          githubLink={project.githubLink} 
          demoLink={project.demoLink} 
          cardClassName={"projectCard card"+(index+1)}
          siteImage={project.siteImage}
          isRight={index%2 === 0}
          colClassName={colClassName}
          fadeDirection={fadeDirection}
          key={index}
          />
        )

      })}
      </>

    )
}





