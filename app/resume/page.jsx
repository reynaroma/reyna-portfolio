"use client";

import { FaThml5, FaCss3, FaReact, FaNodeJs, FaJs, } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { FaWebflow } from "react-icons/fa6";

// about data
const about = {
  title: 'About me',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Reyna May Roma',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+1) 306 684-0292',
    },
    {
      fieldName: 'Experience',
      fieldValue: '1+ years',
    },
    {
      fieldName: 'Skype',
      fieldValue: 'Reyna May Roma',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Filipino',
    },
    {
      fieldName: 'Email',
      fieldValue: 'roma.reynamay@gmail.com',
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available',
    },
    {
      fieldName: 'Language',
      fieldValue: 'English, Filipino',
    },
  ]
};

// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: "My experience",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  items: [
    {
      company: "Accenture Inc.",
      position: "Application Development Associate",
      duration: "2021 - 2022",
    },
    {
      company: "Free Periods Canada",
      position: "Webflow Developer",
      duration: "2023 - 2024",
    },
  ]
};

// education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: "My education",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  items: [
    {
      institution: "Adamson University",
      degree: "Bachelor of Science in Computer Engineering",
      duration: "2014 - 2020",
    },
    {
      institution: "Lighthouse Labs",
      degree: "Web Development Bootcamp",
      duration: "2023",
    },
  ]
};

// skils data
const skils = {
  title: 'My skills',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  skillList: [
    {
      icon: <FaThml5 />,
      name: 'html 5',
    },
    {
      icon: <FaCss3 />,
      name: 'css 3',
    },
    {
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      icon: <FaReact />,
      name: 'react.js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css',
    },
    {
      icon: <FaNodeJs />,
      name: 'node.js',
    },
    {
      icon: <FaWebflow />,
      name: 'Webflow',
    },
  ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={
        {
          opacity: 1,
          transition: {
            delay: 2.4, duration: 0.4, ease: 'easeIn'
          }
        }
      }
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className="container mx-auto">
        <Tabs>
          <TabsList>
            <TabsTrigger>Experience</TabsTrigger>
            <TabsTrigger>Education</TabsTrigger>
            <TabsTrigger>Skills</TabsTrigger>
            <TabsTrigger>About me</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
