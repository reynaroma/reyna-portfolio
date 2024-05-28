"use client";

import { BsArrowDownRight } from 'react-icons/bs';

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: "Building modern, responsive website using JavaScript frameworks like React.js, Next.js, TailwindCSS and so on.",
    href: "#web-development",
  },
  {
    num: '02',
    title: 'Webflow Development',
    description: "Creating custom websites using Webflow, a no-code platform for building responsive websites.",
    href: "#webflow-development",
  },
  {
    num: '03',
    title: 'Power Apps Development',
    description: "Developing custom business applications using Microsoft Power Apps.",
    href: "#powerapps-development",
  },
  {
    num: '04',
    title: 'Full-Stack Development',
    description: "End-to-end web solutions from font-end to back-end using JavaScript frameworks.",
    href: "#fullstack-development",
  },
];
import { motion } from 'framer-motion';
import Link from 'next/link';

const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn"
            }
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
          {services.map((service, index) => (
            <div
              key={index}
              className='flex flex-1 flex-col justify-center gap-6 group'>
              {/* top */}
              <div className='w-full flex justify-between items-center'>
                <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
                  {service.num}
                </div>
                <Link
                  className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'
                  href={service.href}>
                  <BsArrowDownRight className='text-primary text-3xl' />
                </Link>
              </div>
              {/* title */}
              <h2 className='text-[42px] text-white font-bold leading-none group-hover:text-accent transition-all duration-500'>{service.title}</h2>
              {/* description */}
              <p className='text-white/60'>{service.description}</p>
              {/* border */}
              <div className='border-b border-white/20 w-full'></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
