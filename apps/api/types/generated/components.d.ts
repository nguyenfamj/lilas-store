import type { Schema, Attribute } from '@strapi/strapi';

export interface MediaImageAndVideos extends Schema.Component {
  collectionName: 'components_media_image_and_videos';
  info: {
    displayName: 'Image and Videos';
    icon: 'landscape';
  };
  attributes: {
    alt: Attribute.String;
    images: Attribute.Media;
    videos: Attribute.Media;
  };
}

export interface SeoTag extends Schema.Component {
  collectionName: 'components_seo_tags';
  info: {
    displayName: 'tag';
    icon: 'priceTag';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    slug: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'media.image-and-videos': MediaImageAndVideos;
      'seo.tag': SeoTag;
    }
  }
}
