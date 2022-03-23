/* eslint-disable no-inner-declarations */
/* eslint-disable prettier/prettier */
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/SvgLogoNeu'
import Link from './Link'
import SectionContainer from './SectionContainer'
import InfoSection from './Infosection'
import ThemeSwitch from '../components/ThemeSwitch'
import Footer from "../components/footer"
import MobileNav from'../components/MobileNav'
const LayoutWrapper = ({ children }) => {

  if (typeof document !== "undefined") {
    // browser code
     // The function below will change the background color

       
     if (!window.location.href !== "htpp://localhost:3000/") {

      function deleteBackgroundImage() {
        document.getElementById("Hero6").style.backgroundImage = "url())"
    
       }
        document.addEventListener("DOMContentLoaded",deleteBackgroundImage());
      }

     }
    

     
  
   
  
   
  
       
  
  
  
  // call the function when the whole DOM content is loaded
  //document.addEventListener("DOMContentLoaded", changeBackgroundImage());
  return (
    <>
      <InfoSection/>
      <SectionContainer className="">
        <div className="w-screen bg-contain bg-transparent flex flex-col justify-between lg:bg-slate-900">
          <header className="fix top-0 mt-1 flex items-start justify-between p-1">
            <div>
              <Link href="/" aria-label={siteMetadata.headerTitle}>
                <div className="flex items-center justify-between">
                  {/*<div className="mr-3">
                    <Logo />
                </div>*/}
                  {typeof siteMetadata.headerTitle === 'string' ? (
                    <div className="hidden text-xl font-semibold ">
                      {siteMetadata.headerTitle}
                    </div>
                  ) : (
                    siteMetadata.headerTitle
                  )}
                </div>
              </Link>
            </div>
            <div className="flex flex-wrap items-end text-base leading-5">
              <div className="hidden lg:sticky lg:block top-0">
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="font-bold uppercase text-gray-100  hover:border-b hover:border-yellow-400 hover:text-yellow-400 dark:text-gray-100 dark:hover:text-sky-700 sm:p-4 lg:text-[.666rem] xl:text-[1rem] 2xl:text-[1.333rem]"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <ThemeSwitch />
              <MobileNav />
            </div>
          </header>
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </SectionContainer>
    </>
  )
}

export default LayoutWrapper
