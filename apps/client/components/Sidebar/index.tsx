'use client';
import React, { useContext } from 'react';
import { GlobalContext } from '../../context';
import { NavigationHeader } from '../../types/navigations';
import Link from 'next/link';
import DynamicSearchBar from '../DynamicSearchBar';

type Props = {
  headers: NavigationHeader[];
};

export default function Sidebar({ headers }: Props) {
  const {
    state: {
      ui: { sidebarActivated },
    },
  } = useContext(GlobalContext);
  return (
    <>
      <aside
        className={`bg-indigo-50 fixed h-full sm:rounded-r-lg sm:w-[500px] w-full py-8 px-12 lg:hidden font-josefin font-light text-lg transition-transform ${
          sidebarActivated ? 'translate-x-0' : '-translate-x-full'
        } ease-in-out duration-300`}
      >
        <DynamicSearchBar placeholder='Tìm sản phẩm bạn muốn' />
        {/* Menus */}
        {sidebarActivated && (
          <ul className='mt-10 space-y-5'>
            {headers.map((header) => (
              <li key={header.url}>
                <Link
                  className='pr-2 motion-reduce:transition-none relative after:absolute after:w-0 after:h-0.5 after:block after:bg-indigo-800 hover:after:w-full after:transition-all after:duration-300 after:ease-in'
                  href={header.url || '/not-found'}
                >
                  {header.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
        {/* Divider */}
        <div className='h-[1px] bg-black w-full my-8' />
        <div>
          <Link
            href='/account'
            className='pr-2 motion-reduce:transition-none relative after:absolute after:w-0 after:h-0.5 after:block after:bg-indigo-800 hover:after:w-full after:transition-all after:duration-300 after:ease-in'
          >
            Đăng nhập/ Đăng kí
          </Link>
        </div>
      </aside>
    </>
  );
}
