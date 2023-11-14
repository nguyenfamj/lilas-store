import Navbar from './components/NavBar';
import Sidebar from './components/SideBar';
import GlobalContextProvider from '../../context';
import './globals.css';
import { Josefin_Sans } from 'next/font/google';
import PromoBar from './components/PromoBar';
import strapiAPI from './utils/strapi-api';
import { ClientGlobal } from '../../types/strapi';

const josefin = Josefin_Sans({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-josefin',
});

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const globals: ClientGlobal = await strapiAPI.getGlobal(params.lang);
  if (!globals.data) return null;

  const { navbar, footer } = globals.data.attributes;

  return (
    <html lang={params.lang}>
      <body className={`${josefin.variable}`}>
        <GlobalContextProvider>
          <PromoBar data={navbar.promobar} />
          <Navbar
            mainHeaders={navbar.mainHeaders}
            logo={{
              urlPath: navbar.logo.img.data.attributes.url,
              alt: navbar.logo.img.data.attributes.alternativeText,
            }}
          />
          <Sidebar headers={navbar.mainHeaders} />
          <main>{children}</main>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
