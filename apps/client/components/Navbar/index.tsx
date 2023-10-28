'use client';
import React, { useContext, useState } from 'react';
import Logo from 'ui/components/Logo';
import {
  Bars2Icon,
  XMarkIcon,
  ShoppingBagIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Button from 'ui/components/Button';
import { GlobalContext } from '../../context';
import type { NavigationHeader } from '../../types/navigations';
import DynamicSearchBar from '../DynamicSearchBar';
import UIHelper from 'ui/utils/UIHelper';

interface Props {
  mainHeaders: NavigationHeader[];
}

export default function Navbar({ mainHeaders }: Props) {
  const {
    state: {
      ui: { sidebarActivated, searchBarActivated, itemsInCart },
    },
    setSidebarActivated,
    setSearchBarActivated,
  } = useContext(GlobalContext);

  return (
    <header className='relative flex items-center justify-center w-full px-2 py-4'>
      <div className='container flex'>
        <div className='flex-1 lg:hidden'>
          <Button
            onClick={() => {
              setSidebarActivated(!sidebarActivated);
            }}
          >
            {sidebarActivated ? (
              <XMarkIcon className='w-5 h-5' />
            ) : (
              <Bars2Icon className='w-5 h-5' />
            )}
          </Button>
        </div>
        <h1 className='m-0 leading-none lg:flex-1'>
          <Logo />
        </h1>
        <nav className='items-center hidden text-sm font-normal uppercase lg:flex font-josefin'>
          <ul className='flex items-center'>
            {mainHeaders.map((mainHeader) => (
              <li key={mainHeader.url} className='px-2 md:mx-8 sm:mx-4'>
                <Link
                  className='pr-2 motion-reduce:transition-none relative after:absolute after:mt-1 after:w-0 after:h-0.5 after:block after:bg-indigo-800 hover:after:w-full after:transition-all after:duration-300 after:ease-in'
                  href={mainHeader.url || '/not-found'}
                >
                  {mainHeader.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className='flex items-center justify-end flex-1 sm:space-x-6'>
          <div className='hidden lg:block'>
            <Button
              onClick={() => {
                setSearchBarActivated(!searchBarActivated);
              }}
            >
              <MagnifyingGlassIcon className='w-5 h-5' />
            </Button>

            <div
              className={UIHelper.conditionalClassNames(
                searchBarActivated ? 'translate-y-5 opacity-100' : 'opacity-0',
                'absolute left-0 flex items-center justify-center w-full h-16 transition ease-in motion-reduce:transition-none duration-150 md:px-32 lg:px-48 bg-indigo-50',
              )}
              onBlur={() => {
                setSearchBarActivated(false);
              }}
            >
              <DynamicSearchBar placeholder='Tìm sản phẩm bạn muốn' />
            </div>
          </div>
          <Link href='/account' className='hidden sm:block'>
            <UserIcon className='w-5 h-5' />
          </Link>
          <Link href='/cart' className='relative'>
            {itemsInCart !== 0 && (
              <div className='absolute -top-1 -left-1'>
                <p className='flex h-4 w-4 items-center justify-center rounded-full dark:bg-white bg-indigo-800 p-1 text-[10px] text-white'>
                  {itemsInCart}
                </p>
              </div>
            )}
            <ShoppingBagIcon className='w-5 h-5' />
          </Link>
        </div>
      </div>
    </header>
  );
}

export type { Props as NavbarProps };
