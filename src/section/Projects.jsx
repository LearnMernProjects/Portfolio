import React from 'react'
import { myProjects } from '../components/constants'
import Project from '../components/Project'
import {motion, useMotionValue, useSpring} from "motion/react"
import {useState} from "react"
const Projects = () => {
  const x= useMotionValue(0);
  
  const y= useMotionValue(0);
  const springX= useSpring(x, {damping:10, stiffness:50});
  const springY= useSpring(y, {damping:10, stiffness:50});
  const [preview, setPreview] = useState(null);
  const handleMouseMove=(e)=>{
    x.set(e.clientX );
    y.set(e.clientY );
  }
  return (
    <section
      id="ProjectDetails"
      onMouseMove={handleMouseMove}
      className="relative c-spacing section-spacing"
    >
      <h2
        className="relative mt-[30px] font-bold text-3xl text-black z-10 text-center flex items-center justify-center transition-transform duration-300 hover:scale-120 hover:font-medium"
        style={{
          backgroundImage: "url('/assets/myproject.png')",
          backgroundSize: "fit",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left",
          borderRadius:"100px",
          
          
          maxWidth: "390px",
          minHeight: "150px", // adjust as needed
          
        }}
      >
        My Completed Projects
      </h2>
      <div className="bg-gradient-to-r  z-50 from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full"/>
      {myProjects.map((project) => (
        <Project key={project.id} project={project} setPreview={setPreview} />
      ))}
  
      
      {preview && <motion.img className="fixed object-cover top-0 left-0 z-50  h-56 rounded-lg shadow-lg pointer-event-none w-80"
      style={{x: springX, y: springY}}
      src={preview}/>}
    </section>
  )
}

export default Projects
