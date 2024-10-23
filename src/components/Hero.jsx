import { motion } from "framer-motion";
import { platform } from "../constants";

import { me, water } from "../assets";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row lg:mt-28 items-start gap-5`}
      >
        {/* ##################################Stripline part################################## */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-[20px] rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Tiham</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web applications, user <br className="sm:block hidden" />
            interfaces and operating functionalities
          </p>
        </div>
        <div className="absolute ml-[50rem] mx-auto hidden lg:block">
          <img
            className="w-[300px] object-contain rounded-full"
            src={me}
            alt="web"
            style={{
              border: "10px solid rgba(255, 255, 255, 0.5)", // Transparent white border
              boxShadow: "0 0 20px 10px rgba(255, 255, 255, 0.2)", // Fading white shadow
            }}
          />
        </div>
        <div className="absolute top-[250px] mx-auto hidden md:block">
          <img
            className="object-contain md:w-[80vw]"
            src={water}
            alt="water"
            style={{
              transform: "rotate(-40deg)",
            }}
          />
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

      <div className="hidden md:flex md:fixed md:flex-col md:top-[35%] md:left-0 md:z-50">
        <ul>
          {platform.map((n) => {
            return (
              <li
                key={`${n.title}${n.id}`}
                className="w-[160px] h-[60px] rounded-xl bg-tertiary mb-1 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300"
              >
                <a
                  className="ml-5 flex w-full text-secondary"
                  href={n.link}
                  target="_blank"
                >
                  {n.title}
                </a>
                <img src={`${n.icon}`} className="w-[25%] mr-2"></img>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
