/* eslint-disable prettier/prettier */
import Image from "next/image";
import siteMetadata from '../data/siteMetadata'
import SocialIcon from '../components/social-icons'
import LogoLeckerladen from '../components/icons/svg/SVGLogoLeckerladen'
import Ganter from '../components/icons/svg/SVGGanter.js'
import Astra from '../components/icons/svg/SVGAstra'
import { Link } from "heroicons-react";
const Footer = () => {
  return (
     <div className="bg-amber-800 flex flex-col lg:flex lg:flex-row justify-center items-center h-[100vh-100px]">
      <div className="relative flex basis-1/3 justify-center">
      
      
      
      
      
      
          
      
      

                               <div className="mt-3 mb-3 flex space-x-4">
                                  <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
                                  <SocialIcon kind="github" href={siteMetadata.github} size="6" />
                                  <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
                                  <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
                                  <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
                                  <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
                                </div>
      </div>
       <div className="relative flex basis-1/3">
       <div className="mb-2 flex flex-col justify-center items-center lg:flex lg:flex-row space-x-2 text-xs text-slate-50 dark:text-gray-400 md:text-sm lg:text-lg xl:text-xl">
        <div className="text-center font-mono">{`© ${new Date().getFullYear()}`}</div>
        <div className='hidden md:block'>{` • `}</div>
          <p className="font-serife">alle Rechte:</p>
          <div className="font-sans text-sm font-extrabold text-yellow-300 lg:text-lg xl:text-xl">{siteMetadata.author}</div>
               <p className="font-serife text-gray-100">Rettungsanker-Freiburg</p>
        </div>
      </div>
      <div  className="relative flex basis-1/3">
      <div className='mt-3'>
          <p className="mb-1 text-gray-50 text-center lg:text-4xl">Partner:</p>
          <div className=":mb-3 grid grid-cols-3 gap-5 justify-around items-center lg:justify-between lg:item-center">
          <Ganter className="w-12 h-12 lg:w-36 lg:h-12"></Ganter>
          <Astra className="w-12 h-12 lg:w-36 lg:h-12"></Astra>
          <LogoLeckerladen className="w-20 h-20     lg:w-36 lg:h-12 lg:ml-5"></LogoLeckerladen>
          </div>
          
        </div>                                  
      </div>
    </div>
  );
};

export default Footer;


{/*import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import LogoLeckerladen from '../components/icons/svg/SVGLogoLeckerladen'
import Ganter from '../components/icons/svg/SVGGanter.js'
import Astra from '../components/icons/svg/SVGAstra'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 bg-amber-900 flex flex-col items-center">
      <div className='mt-12'>
          <p className="mb-5 text-gray-50 text-center">Partner:</p>
          <div className="flex flex-col justify-center items-center md:flex md:flex-row md:jusify-center md:items-baseleline">
          <Ganter className="inline w-36 h-8"></Ganter>
          <Astra className="inline mb-6  w-36 h-8"></Astra>
          <LogoLeckerladen className="mb-5 w-36 h-8"></LogoLeckerladen>
          </div>
          
        </div>
        <div className="mt-3 mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
        </div>
        <div className="mb-2 flex flex-col justify-center items-center md:flex space-x-2 text-xs text-slate-50 dark:text-gray-400 md:text-sm">
        <div>{`© ${new Date().getFullYear()}`}</div>
        <div className='hidden md:block'>{` • `}</div>
          <p>all rights reserved</p>
          <div className="font-sans text-xs font-extrabold text-yellow-300">{siteMetadata.author}</div>
          <div className='hidden md:block'>{` & `}</div>
         <Link className="" href="/">{siteMetadata.title}</Link>
        </div>
        </div>
    </footer>
  )
}
*/}