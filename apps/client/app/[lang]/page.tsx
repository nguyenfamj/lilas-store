import Image from 'next/image';
import strapiApi, { getStrapiURL } from './utils/strapi-api';
import { ClientHomePage } from '../../types/strapi';
import Link from 'next/link';
import Button from 'ui/components/Button';
import UIHelpers from 'ui/utils/UIHelper';
import Carousel from 'ui/components/Carousel';

export default async function Page({ params }: { params: { lang: string } }) {
  const {
    data: {
      attributes: { hero_images },
    },
  }: ClientHomePage = await strapiApi.getHomePage(params.lang);

  return (
    <>
      <section className='hero-section'>
        <Carousel options={{ loop: true }}>
          {hero_images.map((hero) => (
            <div
              key={hero.id}
              className='relative w-full h-[400px] md:h-[600px] 2xl:h-[700px] flex-carousel min-w-0'
            >
              <div className='absolute z-10 space-y-8 bottom-10 left-10 lg:bottom-20 lg:left-20 font-josefin'>
                <div className='space-y-2'>
                  <h3 className='text-3xl font-semibold text-indigo-800'>
                    {hero.title}
                  </h3>
                  <p className='text-lg font-light'>{hero.description}</p>
                </div>
                <div>
                  {hero?.buttons?.map((button) => (
                    <Link key={button.id} className='' href={button.url}>
                      <Button
                        className={UIHelpers.conditionalClassNames(
                          button.type === 'primary'
                            ? 'bg-white'
                            : 'bg-pink-900 text-white',
                          'py-2 px-10 text-sm lg:py-3 lg:px-12 font-josefin font-light rounded-sm uppercase',
                        )}
                      >
                        {button.text}
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>
              <Image
                className='z-0 object-cover'
                fill
                alt={hero.image?.data.attributes.alternativeText}
                src={getStrapiURL(hero.image?.data.attributes.url)}
              />
            </div>
          ))}
        </Carousel>
      </section>
    </>
  );
}
