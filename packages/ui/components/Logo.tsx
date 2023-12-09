import Link from 'next/link';
import Image from 'next/image';
import fallbackLogo from '../assets/logo.png';
type Props = { img?: string; alt?: string };

const Logo = ({ img = fallbackLogo, alt = '' }: Props) => {
  return (
    <Link href={`/`}>
      <Image
        className='sm:w-full sm:max-w-[90px] max-w-[70px]'
        src={img}
        height={100}
        width={100}
        alt={alt}
        priority
      />
    </Link>
  );
};

export default Logo;
