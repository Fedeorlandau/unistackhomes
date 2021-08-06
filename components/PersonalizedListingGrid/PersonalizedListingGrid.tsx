import React from 'react';

import { contentstackOptimizeListReader } from '@uniformdev/optimize-tracker-contentstack';
import { Personalize } from '@uniformdev/optimize-tracker-react';

import { Entry, StandardEntryFields } from '../../lib/contentstack';
import Card, { CardProps } from '../Card/Card';

export interface PersonalizedListingGridProps extends StandardEntryFields{
  unfrm_opt_p13n_list: Entry<CardProps>[];
  title: string;
}
const PersonalizedListingGrid: React.FC<Entry<PersonalizedListingGridProps>> = ({ unfrm_opt_p13n_list } : Entry<PersonalizedListingGridProps>) => {
  if (unfrm_opt_p13n_list) {
    const variations = contentstackOptimizeListReader(unfrm_opt_p13n_list);
    return (

      <Personalize
        variations={variations}
        trackingEventName="heroPersonalized"
        component={Card}
      />

    );
  }
  return null;
};

export default PersonalizedListingGrid;
