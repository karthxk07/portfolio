import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
// cleaned imports

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/karthxk07" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/karthik-kalyanam-53571b254/" },
    { icon: <FaTwitter />, url: "https://twitter.com/kalyanammm" },

  ];

  return (
    <footer className="bg-black/20 mt-5 py-12 px-4 md:px-8 border-t border-white/10">
      < div
        className="max-w-4xl mx-auto text-center"

      >
        <h3 className="text-2xl font-bold tracking-tight text-white mb-4">
          baking silicon wafers - karthik
        </h3>

        <div className="flex justify-center items-center space-x-6 my-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-2xl hover:text-white hover:scale-125 transition-all"
            >
              {link.icon}
            </a>
          ))}
        </div>


      </div>
    </footer>
  );
};

export default Footer;
