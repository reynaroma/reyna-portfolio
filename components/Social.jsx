import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/reynaroma' },
  { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/reyna-may-roma/' },
  { icon: <SiGmail />, path: 'mailto:roma.reynamay@gmail.com' },
  { icon: <FaFacebookF />, path: 'https://www.facebook.com/littleraaaain/' },
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