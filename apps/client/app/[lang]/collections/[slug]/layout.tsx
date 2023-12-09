import React from 'react';
import strapiApi, { getStrapiURL } from '../../utils/strapi-api';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  children: React.ReactNode;
  params: { lang: string; slug: string };
};

const SingleCollectionLayout = async ({ children, params }: Props) => {
  const collectionWithChildren =
    await strapiApi.getProductCollectionChildrenBySlug(
      params.slug,
      params.lang,
    );

  const child_collections =
    collectionWithChildren.data[0].attributes.child_collections.data;

  return (
    <div>
      <div className='w-full'>
        <div className='flex justify-center px-6 py-4'>
          <div className='flex py-3 space-x-10 overflow-x-auto'>
            {child_collections.map((child_collection) => {
              const cover_image =
                child_collection?.attributes.cover_image.data.attributes;
              return (
                <Link
                  className='space-y-5 font-light text-center font-josefin'
                  href={`/${params.lang}/collections/${child_collection.attributes.slug}`}
                >
                  <div className='relative w-32 h-32 mb-3 md:w-40 md:h-40'>
                    <Image
                      className='object-cover rounded-full'
                      alt={cover_image.alternativeText}
                      fill
                      src={getStrapiURL(cover_image.formats.medium.url)}
                    />
                  </div>
                  <div>{child_collection.attributes.title}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default SingleCollectionLayout;
