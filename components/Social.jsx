import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const socials = [
  { icon: <FaGithub />, path: '' },
  { icon: <FaLinkedinIn />, path: '' },
  { icon: <SiGmail />, path: '' },
  { icon: <FaFacebookF />, path: '' },
]

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.path}
          className={iconStyles}>
          {social.icon}
        </Link>
      ))}
    </div>
  )
}

export default Social