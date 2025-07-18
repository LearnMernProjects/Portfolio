import React from 'react'
import { motion } from 'framer-motion'
import { myProjects } from './constants'
const ProjectDetails= ({
     title,description,closeModal, subDescription, image,tags,href

})=>{

  return (
     
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
     <motion.div
     initial={{opacity:0, scale:0.5}}
     animate={{opacity:1, scale:1}} className="relative font-mono text-white max-w-2xl border shadow=sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10">
     <button onClick={closeModal} className='absolute p-2 bg-midnight rounded-sm top-5 right-5 hover:bg-gray-500 '>
          <img src="assets/close.png" className="w-6 h-6"></img>
          </button>
          <img src={image} alt={title} className='w-full  rounded-t-2xl '/>
          <h5 className='font-bold text-xl font-mono'>{title}</h5>
          <p className='mb-3 font-normal text-white-400'>{description}</p>
          {subDescription.map((subDesc,index)=> (
               <p key={index} className='mb-3 font-normal text-white'>{subDesc}</p>
          ))}
          <div className='flex items-center justify-between mt-4'>
               <div className='flex gap-3'>
                    {tags.map((tag) => (
                         <img key={tag.id}
                         src={tag.path}
                         alt={tag.name}
                         className='rounded-lg size-10 hover-animation'
                    />
                    ))}
               </div>
               <a href={href} className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation">
               View Project Source Code<img src="assets/arrow-up.svg" className='size-4' />
               </a>
          </div>
          </motion.div>
      
    </div>
    
  )
}

export default ProjectDetails
