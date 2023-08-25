import { Icon } from "@iconify/react";
import type { IconifyIcon } from "@iconify/types";

type FeatureProps = {
  title: string;
  description: string;
  icon: IconifyIcon;
};
const Feature = ({ title, description, icon }: FeatureProps) => {
  return (
    <article className='grid grid-cols-1 hover:shadow-lg rounded-md place-items-start group p-4 gap-y-4 hover:bg-brands-primary hover:text-white border border-light-other w-[220px] transition-colors ease-out duration-300'>
      <div className='flex items-center justify-center h-10 w-10 group-hover:bg-white bg-brands-iconBg rounded-md transition-colors ease-out duration-300'>
        <Icon icon={icon} className='text-brands-primary' />
      </div>
      <h3 className='font-medium text-base'>{title}</h3>
      <p className='text-left text-sm '>{description}</p>
    </article>
  );
};

export default Feature;
