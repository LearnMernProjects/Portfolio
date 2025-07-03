import { OrbitingCircles } from "../components/OrbitingCircles";

const Icons = ({ src }) => (
  <img
    src={src}
    className="duration-200 rounded-sm hover:scale-110"
    alt="skill-icon"
  />
);

export function FrameWorks() {
  const skills = [
    "react-svgrepo-com", "tailwindcss", "nextjs", "js", "css3", "m", "3js",
    "git", "html5", "javascript", "microsoft", "react", "sqlite",
    "tailwindcss", "vitejs", "wordpress",
  ];

  return (
    <div className="relative h-[15rem] items-center justify-center flex flex-col w-full mx-auto">
      {/* Outer Orbit - Larger radius */}
      <div className="absolute inset-0 flex items-center justify-center">
        <OrbitingCircles radius={150} iconSize={70}>
          {skills.slice(0, 8).map((skill, i) => (
            <Icons key={i} src={`assets/logos/${skill}.svg`} />
          ))}
        </OrbitingCircles>
      </div>

      {/* Inner Orbit - Smaller radius */}
      <div className="absolute inset-0 flex items-center justify-center">
        <OrbitingCircles radius={90} iconSize={40} >
          {skills.reverse().slice(8).map((skill, i) => (
            <Icons key={i} reverse-direction={true} src={`assets/logos/${skill}.svg`} />
          ))}
        </OrbitingCircles>
      </div>
    </div>
  );
}
