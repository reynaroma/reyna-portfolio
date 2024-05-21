import Link from "next/link";

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const socials = [
  { icon: <FaGithub />, path: '' },
  { icon: <FaLinkedinIn />, path: '' },
  { icon: <SiGmail />, path: '' },
]

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>Social</div>
  )
}

export default Social