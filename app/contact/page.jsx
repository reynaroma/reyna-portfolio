"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '+1 306 684-0292'
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'roma.reynamay@gmail.com'
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: '1319 Warner Street, Moose Jaw, S6H 6K2, SK, Canada'
  },
];

import { motion } from "framer-motion";
import { SelectValue } from "@radix-ui/react-select";

const Contact = () => {

  const form = useRef(); // form reference
  const sendEmail = (e) => {
    e.preventDefault(); // prevent default form submission
    emailjs
      .sendForm()
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 1.2, ease: 'easeIn' }
      }}
      className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              action="">
              <h3 className="text-4xl text-accent">Let&lsquo;s work together</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="First name" />
                <Input type="lastname" placeholder="Last name" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone number" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Select a service' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>
                      Select a service
                    </SelectLabel>
                    <SelectItem value='est'>Web Development</SelectItem>
                    <SelectItem value='cst'>Webflow Development</SelectItem>
                    <SelectItem value='mst'>Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                placeholder='Type your message here.'
                className='h-[200px]' />
              {/* btn */}
              <Button size="md" className="max-w-40" >Send message</Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div>{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact