import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      glareEnable={true}
      glareMaxOpacity={0.2}
      scale={1.1}
      glarePosition="all"
    >
      <motion.div
        whileHover={{ scale: 1.1, zIndex: 1 }}
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={fadeIn("right", "spring", 1 * index, 5)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.5, 4)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm an aspiring Dapp developer with a solid foundation in React and
        JavaScript, and a focus on blockchain technologies. While I have
        hands-on experience with React and smart contract development on
        Ethereum, I'm eager to continue learning and growing in this field. I'm
        a quick learner and enjoy collaborating with clients to create secure,
        scalable, and user-friendly blockchain solutions. Let's work together to
        bring your innovative ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
