import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import twitterOutlined from "@iconify/icons-ant-design/twitter-outlined";
import linkedinSolid from "@iconify/icons-basil/linkedin-solid";
import youtubeSolid from "@iconify/icons-basil/youtube-solid";
import facebookSolid from "@iconify/icons-basil/facebook-solid";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className='bg-brands-footerBg '>
      <div className='max-w-screen-xl mx-auto'>
        <div className='grid grid-cols-2 gap-y-6 md:grid-cols-7 w-full place-content-start place-items-center md:gap-x-4 py-8 md:py-10 border-b border-brands-borderColor'>
          <div className=' flex flex-col gap-y-3 col-span-2  md:col-span-3 md:mr-32 md:pr-28'>
            <Logo toggleLogo={true} />
            <p className='text-brands-footerText text-left'>
              The best project management tools for everyone
            </p>
            <div className='grid grid-cols-4 md:gap-x-2 items-center'>
              <div className='border-[2px] border-brands-primary rounded-full flex items-center justify-center w-10 h-10'>
                <Icon
                  icon={twitterOutlined}
                  className='text-brands-primary  w-6 h-6'
                />
              </div>
              <div className='border-[2px] border-brands-primary rounded-full flex items-center justify-center w-10 h-10'>
                <Icon
                  icon={linkedinSolid}
                  className='text-brands-primary  w-6 h-6'
                />
              </div>
              <div className='border-[2px] border-brands-primary rounded-full flex items-center justify-center w-10 h-10'>
                <Icon
                  icon={facebookSolid}
                  className='text-brands-primary  w-6 h-6'
                />
              </div>
              <div className='border-[2px] border-brands-primary rounded-full flex items-center justify-center w-10 h-10'>
                <Icon
                  icon={youtubeSolid}
                  className='text-brands-primary  w-6 h-6'
                />
              </div>
            </div>
          </div>
          <div className='grid place-items-stretch text-left gap-y-2'>
            <h2 className='text-brands-footerHeader text-base font-semibold'>
              FEATURE
            </h2>
            <ul className='text-brands-footerText text-left text-sm space-y-2'>
              <li>Team Management</li>
              <li>Task Schedule</li>
              <li>File Manager</li>
              <li>Leadership</li>
            </ul>
          </div>
          <div className='grid place-items-start text-left gap-y-2'>
            <h2 className='text-brands-footerHeader text-base font-semibold'>
              RESOURCES
            </h2>
            <ul className='text-brands-footerText text-left text-sm space-y-2'>
              <li>Blog</li>
              <li>Support</li>
              <li>Newsletter</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className='grid md:place-items-start text-left gap-y-2'>
            <h2 className='text-brands-footerHeader text-base h-fit font-semibold'>
              SUPPORT
            </h2>
            <ul className='text-brands-footerText text-left text-sm space-y-2'>
              <li>My Account</li>
              <li>Help & Support</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className='grid place-items-start text-left gap-y-2'>
            <h2 className='text-brands-footerHeader text-base font-semibold'>
              COMPANY
            </h2>
            <ul className='text-brands-footerText text-left text-sm space-y-2'>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Code of Conduct</li>
              <li>Partners</li>
            </ul>
          </div>
        </div>
        <p className='text-brands-footerText py-6'>
          Copyright &copy; 2022{" "}
          <Link to={"projectify"} className='text-brands-primary'>
            Projectify
          </Link>
          , All rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
