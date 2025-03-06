import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.png';

interface LogoProps {
  className?: string
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={`w-44 h-20 relative ${className}`}>
      <Link href='/'>
        <Image src={logo} alt='Pokemon Directory logo' fill sizes='100vw' />
      </Link>
    </div>
  );
}

Logo.defaultProps = {
  className: '',
};
