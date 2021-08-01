import Image from 'next/image';
import logo from '../../public/logo.png';

interface LogoProps {
  className?: string
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={`w-44 h-20 relative ${className}`}>
      <Image
        src={logo}
        alt='Pokemon Directory logo'
        layout='fill'
        objectFit='contain'
      />
    </div>
  );
}

Logo.defaultProps = {
  className: '',
};
