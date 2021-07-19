import { GetStaticPaths, GetStaticProps } from 'next';

import LandingPage, { LandingPageProps } from '../components/LandingPage/LandingPage';
import { getPageBySlug } from '../lib/api';

export default LandingPage;

export const getStaticProps: GetStaticProps<LandingPageProps> = async (context) => {
  let slug = context.params?.slug ? `/${(context.params.slug as string[]).join('/')}` : '/';

  if (slug === '/index') {
    slug = '/';
  }

  const page = await getPageBySlug(context.preview || false, slug);

  return {
    props: {
      slug,
      page,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: ['/', '/buy', '/rent', '/build'],
  fallback: false,
});
