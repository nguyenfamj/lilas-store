import React from 'react';
import { NormalLinkComponent } from '../../../types/strapi';
import Link from 'next/link';

type Props = {
  data: NormalLinkComponent;
};

export default function PromoBar({ data }: Props) {
  return (
    <div className='flex items-center justify-center w-full bg-indigo-700 h-9'>
      <div className='container inline-flex justify-center'>
        <Link
          href={data.url || '/'}
          target={data?.openInNewTab ? '_blank' : ''}
        >
          <h3 className='font-light text-white font-josefin'>{data.text}</h3>
        </Link>
      </div>
    </div>
  );
}
