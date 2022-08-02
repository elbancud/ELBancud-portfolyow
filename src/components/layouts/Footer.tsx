import { socials } from '@/data/contents';
import React from 'react';
const Footer = () => {
  return (
    <div className='container p-3 m-auto'>
      <ul className='flex justify-around'>
        {socials.map((social) => {
          return (
            <li key={social.label}>
              <a href={social.link} target='_blank'>
                {social.label}
              </a>
            </li>
          );
        })}
      </ul>
      <div className=' w-100 grid place-items-center'>@ copyright</div>
    </div>
  );
};
export default Footer;
