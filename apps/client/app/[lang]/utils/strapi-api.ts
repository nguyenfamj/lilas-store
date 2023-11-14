import qs from 'qs';
import { STRAPI_ENDPOINTS } from '../../../types/strapi';

export function getStrapiURL(path = '') {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${path}`;
}

function getAPIAccessToken() {
  const accessToken = process.env.NEXT_PUBLIC_STRAPI_ACCESS_TOKEN;

  if (!accessToken) {
    throw new Error('Cannot find Strapi Access Token in environment variables');
  }

  return accessToken;
}

function generateBaseHeaders(
  accessToken: string,
  additionalHeaders?: Record<string, any>,
) {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
    ...additionalHeaders,
  };
}

async function fetchStrapiAPI(
  path: string,
  urlParamsObject = {},
  options = {},
) {
  try {
    // Merge default and user options
    const mergedOptions = {
      next: { revalidate: 60 },
      ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ''}`,
    )}`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(`Cannot making request to the server: ${error}`);
  }
}

export default {
  getGlobal: async (lang: string) => {
    const accessToken = getAPIAccessToken();

    // Prepare options for the API Request
    const options = { headers: generateBaseHeaders(accessToken) };
    const urlQsParams = {
      populate: [
        'favicon',
        'navbar.mainHeaders',
        'navbar.logo.img',
        'navbar.promobar',
        'footer.menuLinks',
        'footer.socialLinks',
        'footer.legalLinks',
        'footer.logo.img',
      ],
      locale: lang,
    };

    return await fetchStrapiAPI(STRAPI_ENDPOINTS.GLOBAL, urlQsParams, options);
  },

  getHomePage: async (lang: string) => {
    const accessToken = getAPIAccessToken();

    const options = { headers: generateBaseHeaders(accessToken) };
    const urlQsParams = {
      populate: ['hero_images.image', 'hero_images.buttons'],
      locale: lang,
    };
    return await fetchStrapiAPI(
      STRAPI_ENDPOINTS.HOMEPAGE,
      urlQsParams,
      options,
    );
  },
};
