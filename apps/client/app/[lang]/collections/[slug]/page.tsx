'use client';
import React, { useEffect, useState } from 'react';
import strapiApi, { getStrapiURL } from '../../utils/strapi-api';
import { Menu } from '@headlessui/react';
import Image from 'next/image';

const SingleCollectionPage = ({ params: { slug, lang } }) => {
  const [collection, setCollection] = useState<{
    data: Array<any>;
    options?: Record<string, string>;
  }>({ data: [] });
  console.log(collection.data);

  useEffect(() => {
    strapiApi.getProductCollectionBySlug(slug, lang).then((response) => {
      setCollection({ ...collection, data: response.data });
    });
  }, [collection?.options]);

  return (
    <div className=''>
      <div className='flex items-center justify-start w-full py-2 font-light px-14 font-josefin'>
        <Menu>
          <Menu.Button className='px-2 mx-3'>Filter</Menu.Button>
          <Menu.Items></Menu.Items>
        </Menu>
        <Menu>
          <Menu.Button className='px-2 mx-3'>Sort</Menu.Button>
          <Menu.Items></Menu.Items>
        </Menu>
      </div>
      <div className='grid grid-cols-3 px-16 mt-10 gap-x-10'>
        {collection.data[0]?.attributes?.products.data.map((product) => (
          <div key={product.id} className=''>
            <div className='relative h-[600px] w-full'>
              <Image
                className='object-cover'
                src={getStrapiURL(
                  product.attributes.images?.data[0].attributes.formats.large
                    .url,
                )}
                alt={
                  product.attributes.images.data[0].attributes.alternativeText
                }
                fill
              />
            </div>
            <div className='mt-5 text-2xl font-bold text-indigo-800 font-josefin'>
              {product.attributes.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleCollectionPage;
