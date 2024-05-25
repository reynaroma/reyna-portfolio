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
    <motion.div>Work</motion.div>
  )
}

export default Work