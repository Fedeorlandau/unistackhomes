import contentstack from 'contentstack';

import { Entry, PageFields, StandardEntryFields } from './contentstack';

if (!process.env.CONTENTSTACK_STACK_API_KEY) {
  throw new Error('CONTENTSTACK_STACK_API_KEY env not set.');
}

if (!process.env.CONTENTSTACK_DELIVERY_TOKEN) {
  throw new Error('CONTENTSTACK_DELIVERY_TOKEN env not set.');
}

if (!process.env.CONTENTSTACK_ENVIRONMENT) {
  throw new Error('CONTENTSTACK_ENVIRONMENT env not set');
}

const region = process.env.CONTENTSTACK_REGION?.toUpperCase() === 'EU' ? contentstack.Region.EU : contentstack.Region.US;

const config = {
  api_key: process.env.CONTENTSTACK_STACK_API_KEY,
  delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN,
  environment: process.env.CONTENTSTACK_ENVIRONMENT,
  region,
};

const client = contentstack.Stack(config);

const previewClient = client;

const getClient = (preview: boolean) => (preview ? previewClient : client);

export const getEntriesByContentType = async <T extends StandardEntryFields>(
  preview: boolean,
  type: string,
): Promise<Entry<T>[]> => {
  const query = getClient(preview).ContentType(type).Query().includeCount()
    .includeContentType()
    .includeReference()
    .includeEmbeddedItems()
    .toJSON();
  const result = await query.find();

  // result is array where -
  // result[0] == entry objects
  // result[result.length-1] == entry objects count included only when .includeCount() is queried.
  // result[1] == schema of the content type is included when .includeContentType() is queried.
  const entries = result[0].map((entry: Entry<T>) => {
    entry._content_type_uid = type;
    return entry;
  });

  return entries as Entry<T>[];
};

export const getEntryByUid = async (uid: string, type: string) => {
  const query = getClient(true).ContentType(type).Entry(uid).includeContentType()
    .toJSON();
  const result = await query.fetch();

  const references: string[] = [];
  Object.entries(result).forEach((prop) => {
    if (prop[0].includes('ref_')) {
      references.push(prop[0]);
    }
  });

  const fullQuery = getClient(true).ContentType(type).Entry(uid).includeContentType()
    .includeReference(references)
    .toJSON();

  const fullResult = await fullQuery.fetch();
  fullResult._content_type_uid = result.content_type.uid;
  return fullResult;
};

export const getPageBySlug = async (preview: boolean, slug: string)
: Promise<PageFields | undefined> => {
  const query = getClient(preview)
    .ContentType('page')
    .Query()
    .includeCount()
    .includeContentType()
    .includeReference(['components', 'components.unfrm_opt_p13n_list'])
    .addParam('include_dimension', 'true')
    .toJSON();
  const result = await query.where('url', slug).find();

  // result is array where -
  // result[0] == entry objects
  // result[result.length-1] == entry objects count included only when .includeCount() is queried.
  // result[1] == schema of the content type is included when .includeContentType() is queried.

  const [first] = result[0];
  return { ...first, _content_type_uid: 'page' };
};
