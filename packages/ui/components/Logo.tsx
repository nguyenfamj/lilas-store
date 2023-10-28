import Link from 'next/link';
import Image from 'next/image';
import lilasLogo from '../assets/logo.png';

type Props = {};

const Logo = (props: Props) => {
  return (
    <Link href='/'>
      <Image
        className='sm:w-full sm:max-w-[90px] max-w-[70px]'
        src={lilasLogo}
        alt='Logo'
        priority
      />
    </Link>
  );
};

export default Logo;
