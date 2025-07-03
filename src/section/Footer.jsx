import { mySocials } from "../components/constants";
const Footer = () => {
  return (
    <section className="flex flex-wrap text-xl items-center justify-between gap-5 pb-3  text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[4px] w-full" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index} target="_blank" rel="noopener noreferrer">
            <img src={social.icon} className="w-5 h-5 space-y-[17px] transition-transform duration-300 gap-[20px]  hover:shadow-xl hover:scale-[2] cursor-pointer" alt={social.name} />
          </a>
        ))}
      </div>
      <p>© 2025  All rights reserved.</p>
    </section>
  );
};

export default Footer;
