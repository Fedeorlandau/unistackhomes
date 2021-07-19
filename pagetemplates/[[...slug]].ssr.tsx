import { GetServerSideProps } from 'next';

import LandingPage, { LandingPageProps } from '../components/LandingPage/LandingPage';
import { getPageBySlug } from '../lib/api';

export default LandingPage;

export const getServerSideProps: GetServerSideProps<LandingPageProps> = async (context) => {
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
