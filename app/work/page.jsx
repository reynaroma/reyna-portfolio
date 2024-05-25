"use client";

import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import Link from 'next/link';
import Image from 'next/image';
import { github } from '@/public/assets';

const projects = [
  {
    num: '01',
    category: 'Frontend',
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    stack: [
      { name: 'Html 5' },
      { name: 'Css 3' },
      { name: 'JavaScript' },
    ],
    image: '/assets/work/thumb1.png',
    live: '',
    github: '',
  },
  {
    num: '02',
    category: 'Frontend',
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    stack: [
      { name: 'Next.js' },
      { name: 'Tailwind.css 3' },
      { name: 'Node.js' },
    ],
    image: '/assets/work/thumb2.png',
    live: '',
    github: '',
  },
  {
    num: '03',
    category: 'Frontend',
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    stack: [
      { name: 'Next.js' },
      { name: 'Tailwind.css' },
      { name: 'JavaScript' },
    ],
    image: '/assets/work/thumb3.png',
    live: '',
    github: '',
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]); // set default project

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div>
              {/* outline num */}
              <div className=''>{projects.num}</div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>slider</div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work