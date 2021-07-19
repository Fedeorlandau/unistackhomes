import { createElement } from 'react';

import { ComponentMapping } from '../../lib/ComponentMapping';
import { PageFields, ComponentsProps } from '../../lib/contentstack';
import Banner from '../Banner/Banner';
import ListingGrid from '../ListingGrid/ListingGrid';

const componentMapping: ComponentMapping = {
  banner: Banner,
  ref_listings_grid: ListingGrid,
};

export interface LandingPageProps {
  page?: PageFields;
  components?: ComponentsProps[];
  slug: string;
}

export default function LandingPage({ components }: LandingPageProps) {
  if (components?.length) {
    return components.map((component, index) => createElement(componentMapping[component._content_type_uid] ?? (() => null), {
      key: index,
      ...component,
    }));
  }

  return null;
}
