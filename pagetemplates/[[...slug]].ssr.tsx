import { GetServerSideProps } from 'next';

import Home, { HomeProps } from '../components/Home/Home';
import { getEntriesByContentType, getPageBySlug } from '../lib/api';
import { TalkFields } from '../lib/contentstack';

export default Home;

export const getServerSideProps: GetServerSideProps<HomeProps> = async (context) => {
  let slug = context.params?.slug ? `/${(context.params.slug as string[]).join('/')}` : '/';

  if (slug === '/index') {
    slug = '/';
  }

  const page = getPageBySlug(context.preview || false, slug);

  const talks = getEntriesByContentType<TalkFields>(context.preview || false, 'talk');

  return {
    props: {
      slug,
      page: await page,
      talks: (await talks) ?? [],
    },
  };
};
