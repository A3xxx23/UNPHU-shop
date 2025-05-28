import { motion } from 'framer-motion';
import { IconBrandLinkedin, IconBrandGithub, IconPhone, IconMail } from '@tabler/icons-react';

const SocialLinks = [
  {
    id: 1,
    title: 'Github',
    href: 'https://github.com/A3xxx23/',
    icon: IconBrandGithub,
  },
  {
    id: 2,
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/angel-emilio-aquino/',
    icon: IconBrandLinkedin,
  },
  {
    id: 3,
    title: 'Cellphone',
    href: 'https://wa.me/18094038309',
    icon: IconPhone,
  },
  {
    id: 4,
    title: 'Gmail',
    href: 'mailto:angelemilioaquino6@gmail.com',
    icon: IconMail,
  },
];

const socialLinks = [
  {
    id: 1,
    title: 'Github',
    href: 'https://github.com/ingtineo',
    icon: IconBrandGithub,
  },
  {
    id: 2,
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/nicole-tineo-2555a32ba/',
    icon: IconBrandLinkedin,
  },
  {
    id: 3,
    title: 'Cellphone',
    href: 'https://wa.me/18297034070',
    icon: IconPhone,
  },
  {
    id: 4,
    title: 'Gmail',
    href: 'mailto:nicoletineo06@gmail.com',
    icon: IconMail,
  },
];

export const About = () => {
  return (
    <motion.div
      className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full text-white p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Nicole's Card */}
      <motion.div
        className="col-span-1 xl:row-span-3 flex flex-col"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid-container bg-black rounded-lg shadow-lg p-4 flex-grow">
          <img
            src="/avatarNicole.png"
            alt="Avatar Nicole"
            className="w-full sm:h-[276px] h-fit object-contain rounded-md mb-4"
          />
          <div className="flex-grow">
            <p className="grid-headtext text-gray-300 font-bold text-lg">Hi, I'm Nicole Tineo</p>
            <p className="grid-subtext text-gray-300 mt-2 text-md">
              Stack: HTML, CSS, Javascript, Python, Django, Java, SQL Server, Figma, Photoshop, Bootstrap
            </p>
            <p className="grid-subtext text-gray-300 mt-2 text-md">
              I'm a Systems Engineering student at UNPHU with a passion for graphic design and frontend development. 
              I enjoy creating visually appealing and user-friendly web experiences.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Angel's Card */}
      <motion.div
        className="col-span-1 xl:row-span-3 flex flex-col"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="grid-container bg-black rounded-lg shadow-lg p-4 flex-grow">
          <img
            src="/avatarAngel.png"
            alt="Avatar Angel"
            className="w-full sm:h-[276px] h-fit object-contain rounded-md mb-4"
          />
          <div className="flex-grow">
            <p className="grid-headtext text-gray-300 font-bold text-lg">Hi, I'm Angel Aquino</p>
            <p className="grid-subtext text-gray-300 mt-2 text-md">
              Stack: HTML, CSS, Javascript, Python, Django, Java, React, TailwindCSS, PHP, MySQL, SQL Server, Figma, Bootstrap
            </p>
            <p className="grid-subtext text-gray-300 mt-2 text-md">
              I'm a Systems Engineering student at UNPHU with a strong passion for frontend development and UX/UI design.  
              I enjoy crafting intuitive and visually engaging user experiences.
            </p>
          </div>
        </div>
      </motion.div>

      {/* A&N Ecommerce Card */}
      <motion.div
        className="col-span-1 xl:row-span-3 flex flex-col"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid-container bg-black rounded-lg shadow-lg p-2 flex-grow">
          <div className="rounded-3xl w-full sm:h-[250px] h-fit flex justify-center items-center mb-4">
            <img src="/logoRemove.png" alt="Logo" className="max-w-[150px] max-h-[150px] object-contain" />
          </div>
          <div className="mt-6 text-center flex-grow">
            <p className="grid-headtext text-gray-300 text-lg font-semibold leading-relaxed">
              A&N Ecommerce was born with the vision of creating an online store that is not only functional, 
              but also visually appealing and easy to use.
            </p>
            <p className="grid-subtext text-gray-100 text-lg font-semibold mt-3 mb-1 leading-relaxed">
              We focus on offering an intuitive, fluid, and modern user experience, combining design and technology 
              to make every interaction enjoyable and efficient.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Technology Section */}
      <motion.div
        className="xl:col-span-2 xl:row-span-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="grid-container bg-black rounded-lg shadow-lg p-4 flex flex-col items-center">
          <p className="grid-headtext text-gray-300 lg:text-3xl font-bold mb-2 sm:text-2xl pt-1 sm:text-center bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight dark:via-slate-400 dark:to-neutral-400">
            🚀 Technology Behind A&N Ecommerce
          </p>
          <p className="grid-subtext text-gray-100 lg:text-lg text-center mb-4 sm:text-md pt-1">
            A&N Ecommerce is built using a modern and scalable technology stack, ensuring a seamless shopping experience. 
            We leverage powerful tools and frameworks to create a fast, secure, and intuitive platform for our users.
          </p>
          <div className="flex flex-wrap justify-center gap-2 pt-7">
            <motion.img
              src="/stack/react_dark.svg"
              alt="React"
              className="h-12 w-12"
              whileHover={{ scale: 1.2 }}
            />
            <motion.img
              src="/stack/supabase.svg"
              alt="Supabase"
              className="h-12 w-12"
              whileHover={{ scale: 1.2 }}
            />
            <motion.img
              src="/stack/tanstack.svg"
              alt="Tan Stack"
              className="h-12 w-12"
              whileHover={{ scale: 1.2 }}
            />
            <motion.img
              src="/stack/reactrouter.svg"
              alt="ReactRouter"
              className="h-12 w-12"
              whileHover={{ scale: 1.2 }}
            />
            <motion.img
              src="/stack/tailwindcss.svg"
              alt="tailwindCSS"
              className="h-12 w-12"
              whileHover={{ scale: 1.2 }}
            />
            <motion.img
              src="/stack/typescript.svg"
              alt="Typescript"
              className="h-12 w-12"
              whileHover={{ scale: 1.2 }}
            />
            <motion.img
              src="/stack/zod.svg"
              alt="Zod"
              className="h-12 w-12"
              whileHover={{ scale: 1.2 }}
            />
            <motion.img
              src="/stack/netlify.svg"
              alt="Netlify"
              className="h-12 w-12"
              whileHover={{ scale: 1.2 }}
            />
            <motion.img
              src="/stack/motion_dark.svg"
              alt="Framer Motion"
              className="h-12 w-12"
              whileHover={{ scale: 1.2 }}
            />
          </div>
        </div>
      </motion.div>

      {/* Social Media Section */}
      <motion.div
        className="xl:col-span-1 xl:row-span-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="grid-container bg-black rounded-lg shadow-lg p-2 flex flex-col items-center">
          <h2 className="py-2 text-center text-xl font-bold text-gray-300">Follow Nicole and Angel on social media</h2>
          <div className="flex flex-col items-center">
            <h2 className="text-center text-xl font-semibold text-white mb-4 2xl:mb-1">Nicole Tineo</h2>
            <div className="flex justify-center gap-2">
              {socialLinks.map((link) => ( 
                <motion.a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.2 }}
                >
                  <link.icon className="w-8 h-8 text-white hover:text-gray-500" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="w-full border-t border-gray-500 my-4"></div>

          <div className="flex flex-col items-center">
            <h2 className="text-center text-xl font-semibold text-white mb-4 2xl:mb-0.5">Angel Aquino</h2>
            <div className="flex justify-center gap-2">
              {SocialLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.2 }}
                >
                  <link.icon className="w-8 h-12 text-white hover:text-gray-500 pb-1" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

