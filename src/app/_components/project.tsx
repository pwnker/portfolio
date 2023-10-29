'use client'

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import type { PROJECT_DATA } from "../_lib/data";

type ProjectProps = (typeof PROJECT_DATA)[number]; 

export default function Project({
    title, 
    description,
    tags,
    imageUrl
}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1.33 1'],
    });
    
    const scaleProgress   =  useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress =  useTransform(scrollYProgress, [0, 1], [0.65, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress, 
                opacity: opacityProgress 
            }}
            className="group-even:pl-4"
        >
	       <section 
	           className='
		          relative
		          text-left
		          bg-gray-100
		          max-w-[42rem]
		          border border-black/5
                  rounded-lg
		          overflow-hidden
		          sm:pr-8
		          sm:h-[20rem]
		          hover:bg-gray-200
		          transition'
	       >
	           <div
	               className='
		              flex
		              flex-col
		              h-full
		              pt-4
		              pb-7
		              px-5
		              sm:pl-10
		              sm:pr-2
		              sm:pt-10
		              sm:max-w-[50%]
		              group-even:ml-[18rem]'
	           >
	               <h3 className='text-2xl font-semibold'>{title}</h3>
	               <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
	               <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'> 
	               {tags.map((tag, index) => (
	                   <li 
	                   key={index}
	                   className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full '
	                   >
	                   #{tag}
	                   </li>
	               ))}
	               </ul>
	           </div>
	           <Image
	           src={imageUrl} alt={title} quality={95}
	           className='
	               absolute
	               top-8
	               -right-40
	               w-[28.25rem]
	               rounded-t-lg
	               shadow-2xl
	               group-even:right-[initial]
	               group-even:-left-40
	               group-even:group-hover:translate-x-3
	               group-even:group-hover:translate-y-3
	               group-hover:-translate-x-3
	               group-hover:-translate-y-3
	               group-hover:rotate-2
	               group-hover:scale-105
	               transition' 
	           />
	       </section>
        </motion.div>
    );
}
