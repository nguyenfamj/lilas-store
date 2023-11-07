import React from 'react';
import Button from 'ui/components/Button';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

type Props = {
  placeholder: string | undefined;
};

export default function DynamicSearchBar({ placeholder }: Props) {
  return (
    <form className='container relative font-josefin' action=''>
      <input
        type='text'
        placeholder={placeholder}
        className='w-full py-1 text-lg font-light text-indigo-800 bg-transparent border-b border-zinc-300 focus:border-zinc-600 peer focus:outline-none placeholder:font-light placeholder:text-slate-500 placeholder:text-lg'
      />
      <Button className='absolute right-0 h-full px-4'>
        <MagnifyingGlassIcon className='w-5 h-5' />
      </Button>
    </form>
  );
}
