import { Icon } from "@iconify/react";
import hamburgerMenu from "@iconify/icons-mdi/hamburger-menu";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className='flex justify-between items-cente py-3 md:py-4 border border-red-500'>
      <Logo toggleLogo={false} />
      <nav className='hidden md:flex justify-between items-center gap-x-10'>
        <ul className='flex gap-x-4 text-brands-navTextsColor text-base'>
          <li>Home</li>
          <li>Features</li>
          <li>About</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
        <button className='bg-brands-navTextsColor bg-opacity-50 text-white py-3 px-5 rounded-sm'>
          Watch Demo
        </button>
      </nav>
      <button className='flex md:hidden'>
        <Icon
          icon={hamburgerMenu}
          className='w-8 h-8 text-white'
        />
      </button>
    </header>
  );
};

export default Header;
