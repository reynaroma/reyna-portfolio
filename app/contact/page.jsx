"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '+1 306 684-0292',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'roma.reynamay@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: '1319 Warner Street, Moose Jaw, S6H 6K2, SK, Canada',
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSuccess(false);
    setError(false);
  };

  const handleSelectChange = (value) => {
    setFormData({ ...formData, service: value });
    setSuccess(false);
    setError(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Construct user_message
    const user_message = `Name: ${formData.firstname} ${formData.lastname}, Service: ${formData.service}Phone: ${formData.phone} Message: ${formData.message} Email: ${formData.email}`;


    // Append user_message to the form data
    const templateParams = {
      ...formData,
      user_message,
    };

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY,
        templateParams // Pass templateParams here
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
          setFormData({
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            service: '',
            message: '',
          });
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 1.2, ease: 'easeIn' },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              action=""
            >
              <h3 className="text-4xl text-accent">Let&lsquo;s work together</h3>
              <p>Have a project in mind? Let's collaborate on your next project.</p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="First name"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Last name"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* select */}
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Front-End Web Development">Web Development</SelectItem>
                    <SelectItem value="Webflow Development">Webflow Development</SelectItem>
                    <SelectItem value="Power Apps Development">Full Stack Web Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                name="message"
                placeholder="Type your message here."
                className="h-[200px]"
                value={formData.message}
                onChange={handleChange}
                required
              />
              {/* hidden input for user_message */}
              <input type="hidden" name="user_message" value={`Hello ${formData.firstname} ${formData.lastname},\n\n${formData.message}\n\nEmail is: ${formData.email}`} />
              {/* btn */}
              <Button type="submit" size="md" className="max-w-40">
                Send message
              </Button>
              {success && <p className="text-accent">Message sent successfully!</p>}
              {error && <p className="text-red-400">Failed to send the message. Please try again.</p>}
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
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
  );
};

export default Contact;
