import React from 'react'
import { RiHeartsLine } from "react-icons/ri";
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='bg-gray-100 py-6 mt-3 w-full'>
      <div className='text-center'>
        <h2 className='text-gray-800 mb-3'>Made with <RiHeartsLine className='inline text-red-500' /> By Ashutosh</h2>
        <div className='flex justify-center space-x-6'>
          <a href='https://www.linkedin.com/in/ashu12355' target='_blank' rel='noopener noreferrer' className='text-gray-800 hover:text-blue-700'>
            <FaLinkedin size={24} />
          </a>
          <a href='https://github.com/ashu12355' target='_blank' rel='noopener noreferrer' className='text-gray-800 hover:text-black'>
            <FaGithub size={24} />
          </a>
          <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer' className='text-gray-800 hover:text-blue-500'>
            <FaTwitter size={24} />
          </a>
        </div>
        <div className='mt-4'>
          <a href='mailto:Sharmaashutosh12355@gmail.com' className='text-gray-800 hover:text-blue-700'>
            Contact Me
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
