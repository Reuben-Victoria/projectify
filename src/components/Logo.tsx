type LogoProps = {
  toggleLogo: boolean;
};

const Logo = ({ toggleLogo }: LogoProps) => {
  return (
    <div className='flex items-center gap-x-2'>
      <div
        className={` h-10 w-10 rounded-full flex items-center border  ${
          toggleLogo
            ? "border-brands-primary bg-brands-primary"
            : "bg-brands-footerBg border-brands-footerBg"
        }`}
      >
        <div
          className={`bg-brands-footerBg h-7 w-7 rounded-full flex items-center ${
            toggleLogo
              ? "bg-brands-footerBg border-brands-footerBg"
              : "border-brands-primary bg-brands-primary"
          }`}
        >
          <div className='bg-brands-logoBg h-5 w-5 rounded-full'></div>
        </div>
      </div>
      <h1
        className={`text-2xl  font-semibold ${
          toggleLogo ? "text-brands-headerColor" : "text-brands-footerBg"
        }`}
      >
        Projectify
      </h1>
    </div>
  );
};

export default Logo;
