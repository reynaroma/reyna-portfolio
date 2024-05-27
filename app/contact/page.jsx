"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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

const Contact = () => {
  return (
    <div>Contact</div>
  )
}

export default Contact