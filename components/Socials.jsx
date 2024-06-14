import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const social = [
  {
    icon: <FaGithub />,
    path: "https://github.com/RaashiK16"
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/rashi-kulshreshtha-310191254/"
  },
  {
    icon: <FaXTwitter />,
    path: "https://x.com/raashi23"
  },
  {
    icon: <FaInstagram />,
    path: "https://instagram.com/_.raashii__"
  }
]
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {social.map((item, index) => {
        return (
          <Link
            key={index} href={item.path} className={iconStyles} e>
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Socials
