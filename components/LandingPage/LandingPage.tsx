import { createElement } from 'react';

import { ComponentMapping } from '../../lib/ComponentMapping';
import { PageFields } from '../../lib/contentstack';
import Banner from '../Banner/Banner';
import ListingGrid from '../ListingGrid/ListingGrid';
import PersonalizedHero from '../PersonalizedHero/PersonalizedHero';

const componentMapping: ComponentMapping = {
  banner: Banner,
  listing_grid: ListingGrid,
  personalized_hero: PersonalizedHero,
};

export interface LandingPageProps {
  page?: PageFields;
  slug: string;
}

export default function LandingPage({ page }: LandingPageProps) {
  if (page?.components?.length) {
    return page.components.map((component, index) => createElement(componentMapping[component._content_type_uid] ?? (() => null), {
      key: index,
      ...component,
    }));
  }

  return null;
}
