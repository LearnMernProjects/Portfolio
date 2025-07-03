import React, { useRef } from 'react';
import Cards from '../components/Cards';
import { Globe } from "../components/globe";
import CopyEmailButton from '../components/CopyEmailButton';
import {FrameWorks} from "../components/FrameWorks"
import { OrbitingCircles } from "../components/OrbitingCircles";
import '../index.css';

const About = () => {
  const grid2Container = useRef();

  return (
    <section id="About" className='c-space section-spacing max-w-full'>
      <h2 className='text-heading text-black font-bold text-5xl mt-[25px] ml-[25px]'>About Me</h2>
      <div className='grid grid-cols-1 gap-5 mt-12'>

        {/* Grid 1 */}
        <div className='grid-default-color h-[700px] w-full relative'>
          <img
            src="/assets/coding-pov.png"
            className="absolute top-0 left-[300px] w-full h-full object-cover"
            alt="Coding POV"
          />
          <div className='relative text-white top-60 w-[75%] z-10'>
            <p className='headtext font-bold text-2xl'>Hi I am Viraj Sanjay Naik</p>
            <p className='subtext font-semibold text-xl'>
            As a passionate and self-driven web development enthusiast, I am
excited to apply for the Software Engineering Internship at your Organisation. I
bring hands-on experience building web projects using <span className='bg-black rounded-md inline'> HTML, CSS,
JavaScript, React.js,Next.js and MongoDB</span> along with a strong eagerness to grow in a
collaborative, real-world software environment. I have developed VARIOUS
web projects, including a responsive projects using core web
technologies, an animated React.js interface utilizing the GSAP library,
and a full-featured task management dashboard with role-based login
for employees and admins along with a full-stack web app.Which is <span className='bg-black rounded-md inline'>Deepseek</span> . These projects demonstrate my
understanding of front-end development, animations, UI/UX design,
and basic authentication workflows along with backend. While I have primarily worked with
<span className='bg-black rounded-md inline'> React.js and Next.js,</span> I am highly adaptable and enthusiastic about
learning <span className='bg-black rounded-md inline'> Express Js,</span> and other technologies used at <span className='bg-black rounded-md inline'>Quartic.ai</span>. I
also have working knowledge of Git, RESTful APIs, and object-oriented
programming principles. Currently pursuing my undergraduate degree
in Electronics and Computer Science, I am genuinely committed to
delivering meaningful contributions for gaining as much as for working
on real life projects. This opportunity aligns perfectly with my goals to
build real-world solutions and grow into a full-time web development
role.

            </p>
            <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>
          </div>
        </div>

        {/* Grid 2 */}
        <section id="Skills">
        <div className='grid-default-color h-[400px] w-full'>
          <div ref={grid2Container} className=' flex items-center justify-center w-full h-full relative'>
            <p className='absolute bottom-17 text-9xl text-gray-500'>Code is Craft</p>
            <Cards style={{ rotate: "-55deg", top: "10%", left: "65%" }} containerRef={grid2Container} text="HTML" />
            <Cards style={{ rotate: "-30deg", top: "60%", left: "20%" }} containerRef={grid2Container} text="CSS" />
            <Cards style={{ rotate: "40deg", top: "30%", left: "70%" }} containerRef={grid2Container} text="TAILWIND CSS" />
            <Cards style={{ rotate: "-45deg", top: "55%", left: "0%" }} containerRef={grid2Container} text="REACT JS" />
            <Cards style={{ rotate: "20deg", top: "10%", left: "38%" }} containerRef={grid2Container} text="NEXT JS" />
            <Cards style={{ rotate: "20deg", top: "10%", left: "28%" }} containerRef={grid2Container} text="MONGO DB" />
            <Cards style={{ rotate: "20deg", top: "80%", left: "58%" }} containerRef={grid2Container} text="GSAP" />
            <Cards style={{ rotate: "20deg", top: "50%", left: "68%" }} containerRef={grid2Container} text="FRAMER MOTION" />
            <Cards style={{ rotate: "30deg", top: "10%", left: "78%" }} containerRef={grid2Container} text="THREE JS" />
            <Cards style={{ rotate: "30deg", top: "50%", left: "70%" }} containerRef={grid2Container} image="/assets/logos/mongodb.PNG" />
            <Cards style={{rotate: "-45deg", top: "30%", left: "25%" }} containerRef={grid2Container} image="/assets/logos/react.svg" />
            <Cards style={{rotate: "-45deg", top: "5%", left: "25%" }} containerRef={grid2Container}  image="/assets/logos/tailwindcss.svg" />
            <Cards style={{rotate: "-45deg", top: "5%", left: "70%" }} containerRef={grid2Container}  image="/assets/logos/next.jpg" />
            <Cards style={{rotate: "-45deg", top: "5%", left: "70%" }} containerRef={grid2Container}  image="/assets/logos/css3.svg" />
            <Cards style={{rotate: "-45deg", top: "5%", left: "70%" }} containerRef={grid2Container}  image="/assets/logos/HTML5_Logo_512.PNG" />
            <Cards style={{rotate: "-45deg", top: "5%", left: "70%" }} containerRef={grid2Container}  image="/assets/logos/framer-motion.svg" />
            <Cards style={{rotate: "-45deg", top: "5%", left: "70%" }} containerRef={grid2Container}  image="/assets/logos/js.webp" />
            <Cards style={{rotate: "-45deg", top: "5%", left: "70%" }} containerRef={grid2Container}  image="/assets/logos/Three.png" />
          </div>
        </div>
        </section>
        {/* Grid 3 */}
        <div className='grid-black-color  '>
          <div className='w-full z-10 h-[700px]'>
            <p className="head-text text-white text-5xl font-bold">My Skills and Educational Background</p>
            <p className="sub-text mt-[30px] text-white mr-[9] text-2xl font-semibold">I build full-stack web applications using Next.js for routing and React.js for <br></br>dynamic frontends.
             My projects use MongoDB as a scalable NoSQL<br></br> database for efficient data management.
              I've created a full Deepseek <br></br>clone, implementing features like note generation and secure <br></br>auth using Clerk.
               UI styling is handled with Tailwind CSS, delivering clean,<br></br> responsive, and fast interfaces.
             For animations and effects, I integrate tools<br></br> like GSAP, Framer Motion, and  Three.js.
              My development flow includes GitHub<br></br> for version control and real-time integrations using EmailJS.</p>
              <p className="sub-text mt-[10px] text-white mr-[9] w-[55%] text-2xl font-semibold">
              Studying in branch Bachelor of Engineering in
Electronics and Computer Science from
St. Francis Institute Of Technology
09/2024 - 05/2028
Borivali West, Mumbai, Maharashtra<br></br>
Semester Ⅰ GPA:- 8.30/10.0
Semester Ⅱ GPA:-
8.29/10.0 and  
In class 10th, I acheived 96% and 91.89 percentile in
MHTCET 


              </p>
             
               <Globe/>
              
               </div>
               <figure className='absolute left-[10%] top-[10%]'>
                
               </figure>
          
        </div>

        {/* Grid 4 */}
        <div className='grid-special-color text-3xl text-white h-[300px]  w-full'>
          <div className='flex flex-col items-center justify-center gap-4 size-full'>
            <p className="text-center headtext">are you ready to work with me?</p>
            <CopyEmailButton/>
          </div>

        </div>

        {/* Grid 5 */}
        <div className='grid-default-color h-[600px] w-full relative overflow-hidden'>
        <p className='text-3xl w-full items-start headText mt-6 text-yellow-300 font-medium'>TECH STACK</p>
        <p className='subtext text-2xl w-[100%] text-[#dad1cf] mt-[40px] font-Garamond '>
        This section showcases the tools and technologies I use to build responsive, 
        scalable, and visually engaging web <br></br>applications. On the frontend, I use React 
        and Next.js for their component-driven architecture and routing <br></br>capabilities, paired 
        with Tailwind CSS for rapid UI styling. For backend functionality and persistent data<br></br> 
        storage, I work with MongoDB, and Clerk ensures secure and scalable user authentication.
        and interactivity <br></br> to interfaces, I integrate GSAP and Framer Motion for smooth animations,
         while Three.js and GLSL<br></br> are leveraged to create rich 3D visuals and shader effects. Together,
          this tech stack enables me to <br></br>craft dynamic experiences that are both performance-optimized and 
          visually compelling.
        Whether <br></br> it's crafting user interfaces, managing state and routing,
         or creating immersive visuals, this stack<br></br> supports end-to-end development 
         tailored to modern web standards.
        </p>
          <div className='w-[50%] h-[100px] ml-[950px] z-10'>
           
    <FrameWorks />
  </div>
</div>

      </div>
    </section>
  );
};

export default About;
