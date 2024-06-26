import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover"
        src="https://t4.ftcdn.net/jpg/05/33/02/23/240_F_533022360_pQ3WjgQvkL4n4oAYVHCgsJgjvJmFV9Pv.jpg"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Front End Developer</h4>
        <p className="font-bold text-2xl mt-1">Hexabrain Technologies</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt="js"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt="js"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt="js"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt="js"
          />
          {/* tech stack */}
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started Work... - Ended ...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            accusamus consequatur sint. Similique, alias nobis.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            accusamus consequatur sint. Similique, alias nobis.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            accusamus consequatur sint. Similique, alias nobis.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            accusamus consequatur sint. Similique, alias nobis.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            accusamus consequatur sint. Similique, alias nobis.
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
