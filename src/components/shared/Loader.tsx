import { IconLoader } from '@tabler/icons-react';

export const Loader = () => {
  return (
    <div className="flex items-center flex-col justify-center mt-20">
    <IconLoader className="animate-spin-clockwise text-black" size={60}/>
  </div>
  );
};