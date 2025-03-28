import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

const SocialClass = () => {
  // Social Links
  const socialLinks = [
    {
      name: "Facebook",
      url: "https:// facebook.com/school",
      icon: <FaFacebook className="h-5 w-5" />,
    },
    {
      name: "Instagram",
      url: "https:// instagram.com/school",
      icon: <FaInstagram className="h-5 w-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedIn.com/in/school",
      icon: <FaLinkedin className="h-5 w-5" />,
    },
  ];
    return <div className="flex space-x-2">
        {socialLinks.map(link => (
            <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="hover:text-newGenerationYellow transition-colors duration-300" >
            {link.icon}
            </Link>
      ))}
  </div>;
}

export default SocialClass