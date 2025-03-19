
import React from "react";
import Link from "next/link";
import {
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  CodeIcon,
  UserIcon,
  BookOpenIcon,
  GlobeIcon
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 relative -bottom-[28rem] ">
      <div className="w-full max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center text-center md:text-left">
          {/********************  Social Media Links ******************/}
          <div className="flex justify-center md:justify-start space-x-5 mb-6 md:mb-0">
          <Link
              href="https://waqaskhan.netlify.app"
              className="hover:scale-110 transition-transform"
            >
              <GlobeIcon width={25} height={25} className="text-white hover:text-gray-400" />
            </Link>
            <Link
              href="https://github.com/Waqas-Khan-CodeCanvas"
              className="hover:scale-110 transition-transform"
            >
              <GithubIcon width={25} height={25} className="text-white hover:text-gray-400" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/waqas-khan-py/"
              className="hover:scale-110 transition-transform"
            >
              <LinkedinIcon width={25} height={25} className="text-blue-500 hover:text-blue-400" />
            </Link>
            <Link
              href="https://www.instagram.com/waqas.khan623/"
              className="hover:scale-110 transition-transform"
            >
              <InstagramIcon width={25} height={25} className="text-red-500 hover:text-red-400" />
            </Link>
          
          </div>

          {/****************** Footer Navigation ******************/}
          <ul className="flex flex-col md:flex-row md:space-x-6 text-sm font-medium">
            <li>
              <Link
                href="/about"
                className="flex items-center gap-2 hover:text-lime-400 transition-colors"
              >
                <UserIcon className="h-4 w-4" /> About
              </Link>
            </li>
            <li>
              <Link
                href="/"
                target="_blank"
                className="flex items-center gap-2 hover:text-lime-400 transition-colors"
              >
                <DownloadIcon className="h-4 w-4" /> Resume
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="flex items-center gap-2 hover:text-lime-400 transition-colors"
              >
                <CodeIcon className="h-4 w-4" /> Projects
              </Link>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-gray-700" />

        {/****************** Self-Learner Section ******************/}
        <div className="text-center my-6">
          <h2 className="text-xl font-bold text-lime-400 flex justify-center items-center gap-2">
            <BookOpenIcon className="h-6 w-6" /> Self-Learner
          </h2>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
            Passionate about self-learning, I have independently mastered Laravel, PHP, and MySQL.
            Constantly working on new projects to enhance my backend skills and build real-world applications.
          </p>
        </div>

        {/****************** Copyright  ******************/}
        <p className="text-center text-sm text-gray-400">
          © 2023 Waqas Khan™. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
