export const STRAPI_ENDPOINTS = { GLOBAL: '/global', HOMEPAGE: '/homepage' };

// Base type for all Strapi API type
interface BaseType<T> {
  data: {
    id: number;
    attributes: T & {
      createdAt: string;
      updatedAt: string;
      publishedAt?: string;
      locale?: string;
    };
  };
  meta?: Record<string, string>;
}

type StrapiMediaFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string;
  size: number;
  width: number;
  height: number;
};

type StrapiMediaComponent = BaseType<{
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats?: {
    small?: StrapiMediaFormat;
    thumbnail?: StrapiMediaFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  provider_metadata: null;
}>;

// Links
type NormalLinkComponent = {
  id: number;
  url: string;
  openInNewTab: boolean;
  text: string;
};

type SocialLinkComponent = NormalLinkComponent & {
  social_platform: SocialPlatform;
};

type ButtonLinkComponent = NormalLinkComponent & {
  type: 'primary' | 'secondary';
};

type NavbarLayoutComponent = {
  promobar: NormalLinkComponent;
  logo: {
    id: number;
    text: string;
    img: StrapiMediaComponent;
  };
  mainHeaders: (NormalLinkComponent & { subHeaders?: NormalLinkComponent[] })[];
};

type FooterLayoutComponent = {
  logo: {
    id: number;
    text: string;
    img: StrapiMediaComponent;
  };
  legalLinks: NormalLinkComponent[];
  menuLinks: SocialLinkComponent[];
};

type ClientGlobal = BaseType<{
  favicon: StrapiMediaComponent;
  navbar: NavbarLayoutComponent;
  footer: FooterLayoutComponent;
}>;

type ClientHomePage = BaseType<{
  hero_images: {
    id: number;
    title: string;
    description: string;
    image: StrapiMediaComponent;
    buttons?: ButtonLinkComponent[];
  }[];
}>;

enum SocialPlatform {
  INSTAGRAM,
  FACEBOOK,
  SHOPEE,
  YOUTUBE,
}

export type {
  ClientGlobal,
  NormalLinkComponent,
  ClientHomePage,
  ButtonLinkComponent,
  StrapiMediaComponent,
};
