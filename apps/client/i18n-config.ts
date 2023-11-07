export const i18n = {
  locales: ['vi'],
  defaultLocale: 'vi',
};

export type Locale = (typeof i18n)['locales'][number];
